import React, { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

// Helper to determine slides to show based on window width
const getSlidesToShow = (windowWidth) => {
  if (windowWidth >= 1280) return 3;
  if (windowWidth >= 768) return 2;
  return 1;
};

const AttractiveImageSlider = ({ slideData, url }) => {
  const [currentRealSlide, setCurrentRealSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [autoplayActive, setAutoplayActive] = useState(true); // Renamed from isAutoplayPaused

  const slideRefs = useRef([]);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const autoplayTimerRef = useRef(null); // Ref to store the interval ID
  const animationTimelineRef = useRef(null); // Ref to hold the current GSAP timeline

  const originalTotalSlides = slideData.length;
  const slidesPerView = getSlidesToShow(windowWidth);
  const slideGap = 32;

  const numClones = Math.max(slidesPerView, 2);

  const loopedSlidesData = [
    ...slideData.slice(originalTotalSlides - numClones),
    ...slideData,
    ...slideData.slice(0, numClones),
  ];

  const initialOffset = numClones;

  // Initialize currentAnimatedSlide directly based on initialOffset.
  const [currentAnimatedSlide, setCurrentAnimatedSlide] =
    useState(initialOffset);

  // --- Autoplay Control Functions ---
  const clearAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  const startAutoplayTimer = useCallback(() => {
    clearAutoplayTimer();
    autoplayTimerRef.current = setInterval(() => {
      setCurrentAnimatedSlide((prev) => prev + 1);
    }, 3000);
  }, [clearAutoplayTimer]); // Depend on clearAutoplayTimer for stability

  // --- Functions to handle slide transitions ---
  const goToSlide = useCallback(
    (index) => {
      setAutoplayActive(false); // User interacted, disable autoplay
      clearAutoplayTimer(); // Clear timer immediately
      if (animationTimelineRef.current) {
        animationTimelineRef.current.kill();
      }
      setCurrentAnimatedSlide(index + initialOffset);
    },
    [initialOffset, clearAutoplayTimer]
  );

  const goToNextSlide = useCallback(() => {
    setAutoplayActive(false); // User interacted, disable autoplay
    clearAutoplayTimer(); // Clear timer immediately
    if (animationTimelineRef.current) {
      animationTimelineRef.current.kill();
    }
    setCurrentAnimatedSlide((prev) => prev + 1);
  }, [clearAutoplayTimer]);

  const goToPrevSlide = useCallback(() => {
    setAutoplayActive(false);
    clearAutoplayTimer(); // Clear timer immediately
    if (animationTimelineRef.current) {
      animationTimelineRef.current.kill();
    }
    setCurrentAnimatedSlide((prev) => prev - 1);
  }, [clearAutoplayTimer]);

  // --- Effect for Resizing (snap to current position) ---
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (containerRef.current && slideRefs.current[initialOffset]) {
        const singleSlideWidth = slideRefs.current[initialOffset].offsetWidth;
        const targetX = -(currentAnimatedSlide * (singleSlideWidth + slideGap));
        gsap.set(containerRef.current, { x: targetX }); // Instant snap on resize
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentAnimatedSlide, initialOffset, slideGap]);

  // --- Main GSAP Animation Effect (triggered by currentAnimatedSlide changes) ---
  useEffect(() => {
    if (!containerRef.current || !slideRefs.current[initialOffset]) {
      return;
    }

    const singleSlideWidth = slideRefs.current[initialOffset].offsetWidth;
    const targetX = -(currentAnimatedSlide * (singleSlideWidth + slideGap));

    if (animationTimelineRef.current) {
      animationTimelineRef.current.kill();
    }

    animationTimelineRef.current = gsap.timeline({
      overwrite: true,
      onUpdate: () => {
        // --- Seamless Looping Logic: Instantly reposition when passing clone boundaries ---
        const currentX = gsap.getProperty(containerRef.current, "x");
        const tolerance = 1; // A small tolerance for floating point precision

        // If we've animated past the last original slide into the cloned first ones
        if (
          currentAnimatedSlide >= originalTotalSlides + initialOffset &&
          currentX <=
            -(originalTotalSlides + initialOffset - 1) *
              (singleSlideWidth + slideGap) -
              tolerance
        ) {
          const newAnimatedIndex =
            initialOffset +
            (currentAnimatedSlide - (originalTotalSlides + initialOffset));
          gsap.set(containerRef.current, {
            x: -(newAnimatedIndex * (singleSlideWidth + slideGap)),
          });
          setCurrentAnimatedSlide(newAnimatedIndex); // Sync state with the new position
        } else if (
          currentAnimatedSlide < initialOffset &&
          currentX >= -initialOffset * (singleSlideWidth + slideGap) + tolerance
        ) {
          const newAnimatedIndex =
            originalTotalSlides + (currentAnimatedSlide - initialOffset);
          gsap.set(containerRef.current, {
            x: -(newAnimatedIndex * (singleSlideWidth + slideGap)),
          });
          setCurrentAnimatedSlide(newAnimatedIndex); // Sync state with the new position
        }
      },
      onComplete: () => {
        const realIndex =
          (currentAnimatedSlide - initialOffset + originalTotalSlides) %
          originalTotalSlides;
        setCurrentRealSlide(realIndex);

        // Resume autoplay if it's still marked as active
        if (autoplayActive) {
          startAutoplayTimer(); // Restart the timer
        }
      },
    });

    // 1. Animate the main container's X position
    animationTimelineRef.current.to(
      containerRef.current,
      {
        x: targetX,
        duration: 0.8,
        ease: "power3.out",
      },
      0
    );

    // 2. Animate individual slide elements and their images
    slideRefs.current.forEach((slideEl, index) => {
      if (!slideEl) return;

      const imageEl = slideEl.querySelector("img");

      const isCurrentlyActiveInView =
        index >= currentAnimatedSlide &&
        index < currentAnimatedSlide + slidesPerView;

      gsap.set(imageEl, { clearProps: "scale,x,y" });
      gsap.set(slideEl, { clearProps: "scale,opacity,zIndex" });

      animationTimelineRef.current.to(
        slideEl,
        {
          scale: isCurrentlyActiveInView ? 1.02 : 0.9,
          opacity: isCurrentlyActiveInView ? 1 : 0.7,
          duration: 0.6,
          ease: "power3.out",
          zIndex: isCurrentlyActiveInView ? 20 : 10,
        },
        0
      );

      if (index === currentAnimatedSlide) {
        animationTimelineRef.current.fromTo(
          imageEl,
          { scale: 1.05, y: 0 },
          { scale: 1, y: 0, duration: 1.0, ease: "power2.out" },
          0.1
        );
      } else {
        gsap.to(imageEl, { scale: 1, duration: 0.5, ease: "power2.out" });
      }
    });

    // Cleanup function for the GSAP useEffect
    return () => {
      if (animationTimelineRef.current) {
        animationTimelineRef.current.kill();
        animationTimelineRef.current = null;
      }
    };
  }, [
    currentAnimatedSlide,
    slidesPerView,
    slideGap,
    initialOffset,
    originalTotalSlides,
    autoplayActive,
    startAutoplayTimer,
  ]);

  // --- Autoplay Initialization Effect ---

  useEffect(() => {
    if (autoplayActive) {
      // Only start if autoplay is meant to be active initially
      startAutoplayTimer();
    }

    // Cleanup interval when component unmounts
    return () => {
      clearAutoplayTimer();
    };
  }, [autoplayActive, startAutoplayTimer, clearAutoplayTimer]);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full overflow-hidden px-4 md:px-8 lg:px-12 py-5 bg-cover bg-center `}
      style={{ backgroundImage: `url('${url}')` }}
      onMouseEnter={clearAutoplayTimer} // Clear timer on hover
      onMouseLeave={() => {
        if (autoplayActive) {
          // Only restart if autoplay is still desired
          startAutoplayTimer();
        }
      }}
    >
      <div ref={containerRef} className="flex gap-x-8">
        {loopedSlidesData.map((slide, index) => (
          <div
            key={`${slide.id}-${index}`}
            ref={(el) => (slideRefs.current[index] = el)}
            className={`
              flex-shrink-0 relative h-[450px] md:h-[500px] lg:h-[550px]
              rounded-lg shadow-xl overflow-hidden
            `}
            style={{
              width: `calc((100% - ${
                (slidesPerView - 1) * slideGap
              }px) / ${slidesPerView})`,
            }}
          >
            <img
              src={slide.imageUrl}
              className="hover:scale-120"
              alt={slide.alt}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 w-full flex justify-between px-4 md:px-8 lg:px-12">
        <button
          onClick={goToPrevSlide}
          className="bg-white bg-opacity-40 p-3 md:p-4 rounded-full text-gray-800 text-2xl md:text-3xl hover:bg-opacity-60 transition-all duration-300 focus:outline-none shadow-lg"
        >
          &#x2190;
        </button>
        <button
          onClick={goToNextSlide}
          className="bg-white bg-opacity-40 p-3 md:p-4 rounded-full text-gray-800 text-2xl md:text-3xl hover:bg-opacity-60 transition-all duration-300 focus:outline-none shadow-lg"
        >
          &#x2192;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentRealSlide === index
                ? "bg-white scale-125 shadow-md"
                : "bg-gray-400 bg-opacity-70"
            } transition-all duration-300 focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default AttractiveImageSlider;
