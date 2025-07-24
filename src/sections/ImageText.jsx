import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const ImageTextAnimate = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Main section animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80, rotationX: -15 },
      { opacity: 1, y: 0, rotationX: 0, duration: 1.2, ease: "power3.out" }
    );

    // Image animation with bounce effect
    gsap.fromTo(
      imgRef.current,
      { scale: 0.6, opacity: 0, rotation: -10 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "back.out(1.7)",
      }
    );

    // Text paragraphs with stagger and slide effect
    gsap.fromTo(
      textRef.current.children,
      { x: 60, opacity: 0, skewX: 10 },
      {
        x: 0,
        opacity: 1,
        skewX: 0,
        duration: 1,
        stagger: 0.3,
        delay: 0.8,
        ease: "power2.out",
      }
    );

    // Continuous floating animation for image
    gsap.to(imgRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row bg-gradient-to-br from-peach via-cream to-softpink rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-primary/20 min-h-[600px]"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-softpink/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cream/20 rounded-full blur-3xl"></div>

      {/* Left: Enhanced Image Section - Full Width */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-cream to-peach p-8 relative">
        <div className="relative w-full">
          {/* Image glow effect */}
          <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl scale-110"></div>
          <img
            ref={imgRef}
            src="/src/assets/section_2_img.png"
            alt="Animated visual"
            className="relative w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-primary/30 backdrop-blur-sm"
          />
          {/* Floating decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-softpink rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Right: Enhanced Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center bg-gradient-to-br from-softpink via-peach to-cream p-8 lg:p-12 relative">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 transform rotate-45 translate-x-10 -translate-y-10"></div>

        <div ref={textRef} className="w-full space-y-8 relative z-10">
          {/* Poetry paragraphs with enhanced styling */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-brown rounded-full"></div>
            <p className="text-brown leading-relaxed text-lg font-medium pl-6 italic bg-cream/40 p-6 rounded-r-2xl shadow-lg backdrop-blur-sm border-l-4 border-primary">
              When we were little
              <br />
              <span className="text-primary font-semibold">
                We knew so very little
              </span>
              <br />
              Laughed until we cried
              <br />
              <span className="text-primary font-semibold">
                Recited our poetry with pride
              </span>
              <br />
              Fought with our friends one day
              <br />
              <span className="text-brown/80">
                When asked why, we couldn't say
              </span>
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-brown rounded-full"></div>
            <p className="text-brown leading-relaxed text-lg font-medium pl-6 italic bg-softpink/50 p-6 rounded-r-2xl shadow-lg backdrop-blur-sm border-l-4 border-primary">
              <span className="text-primary font-semibold">
                Eyes sparkled with our mischievous dreams
              </span>
              <br />
              <span className="text-primary font-semibold">
                Cheeks dimpled with our huge beams
              </span>
              <br />
              Untrimmed nails, undone hair
              <br />
              And that stained blazer with the corner tear
              <br />
              <span className="text-brown/80">
                Taking home report cards &amp; incomplete homework
              </span>
              <br />
              <span className="text-brown/80">
                Were the biggest problems we had to shirk
              </span>
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-brown rounded-full"></div>
            <p className="text-brown leading-relaxed text-xl font-semibold pl-6 italic bg-gradient-to-r from-cream/60 to-peach/60 p-6 rounded-r-2xl shadow-xl backdrop-blur-sm border-l-4 border-primary">
              <span className="text-primary text-2xl">
                Let's go back in time, to a time,
              </span>
              <br />
              <span className="text-brown">
                Where there was no watch to watch the time.
              </span>
              <br />
              <span className="text-primary text-xl">
                To days so carefree, that all we needed
              </span>
              <br />
              <span className="text-brown font-bold text-xl">
                was to simply be.
              </span>
            </p>
          </div>

          {/* Call to action button */}
          <div className="pt-6">
            <Link
              to={"/drinks"}
              className="bg-gradient-to-r from-primary to-brown text-cream px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-brown hover:to-primary"
            >
              Relive Those Moments ✨
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextAnimate;
