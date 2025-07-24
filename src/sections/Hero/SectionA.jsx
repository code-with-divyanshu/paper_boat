import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    let ctx;

    const setupAnimation = () => {
      if (ctx) ctx.revert();

      ctx = gsap.context(() => {
        const slides = gsap.utils.toArray(".slide", sliderContainerRef.current);
        const numSlides = slides.length;

        if (numSlides === 0) {
          console.warn("No slides found for animation.");
          return;
        }

        gsap.to(slides, {
          xPercent: -100 * (numSlides - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sliderContainerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / numSlides,
            start: "top top",
            end: () =>
              `+=${sliderContainerRef.current.scrollWidth - window.innerWidth}`,
            invalidateOnRefresh: true,
          },
        });

        ScrollTrigger.refresh();
      }, containerRef);
    };

    if (sliderContainerRef.current) {
      imagesLoaded(sliderContainerRef.current, { background: true }, () => {
        console.log("All images loaded, setting up animation...");
        setupAnimation();
      });
    } else {
      setupAnimation();
    }

    const handleResize = () => {
      setTimeout(() => {
        ScrollTrigger.refresh(true);
        console.log("ScrollTrigger refreshed on resize.");
      }, 300); // slight delay to allow DOM to stabilize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative"
      style={{ zIndex: 10 }}
    >
      <section
        ref={sliderContainerRef}
        className="slider-container flex w-[400vw] min-h-screen gap-x-1"
      >
        <div className="slide w-screen min-h-screen flex items-center justify-center text-4xl flex-shrink-0">
          <picture className="w-full h-full">
            <source
              media="(max-width: 767px)"
              srcSet="./src/assets/home1mb.jpg"
            />
            <img
              src="./src/assets/home1.png"
              alt="Paper Boat Heritage"
              className="w-full h-full object-contain mt-15 md:mt-2"
              loading="eager"
            />
          </picture>
        </div>

        <div className="slide w-screen min-h-screen flex items-center justify-center text-4xl flex-shrink-0">
          <picture className="w-full h-full">
            <source
              media="(max-width: 767px)"
              srcSet="./src/assets/Innovation_mb.jpg"
            />
            <img
              src="./src/assets/home2.jpg"
              alt="Paper Boat Innovation"
              className="w-full h-full object-contain mt-15 md:mt-2"
              loading="lazy"
            />
          </picture>
        </div>

        <div className="slide w-screen min-h-screen flex items-center justify-center text-4xl flex-shrink-0">
          <picture className="w-full h-full">
            <source
              media="(max-width: 767px)"
              srcSet="./src/assets/home3mb.jpg"
            />
            <img
              src="./src/assets/home3.png"
              alt="Paper Boat Experience"
              className="w-full h-full object-contain mt-15 md:mt-2"
              loading="lazy"
            />
          </picture>
        </div>

        <div className="slide w-screen min-h-screen flex items-center justify-center text-4xl flex-shrink-0">
          <picture className="w-full h-full">
            <source
              media="(max-width: 767px)"
              srcSet="./src/assets/home4mb.jpg"
            />
            <img
              src="./src/assets/home4.png"
              alt="Paper Boat Quality"
              className="w-full h-full object-contain mt-15 md:mt-2"
              loading="lazy"
            />
          </picture>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
