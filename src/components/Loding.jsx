import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";

export default function Loading({ onComplete }) {
  const loadingContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const lottieRef = useRef(null);
  const charRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const text = "Loading Paper Boat...";
      const chars = text.split("");

      textContainerRef.current.innerHTML = "";
      charRefs.current = [];

      chars.forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.className = "relative inline-block overflow-hidden";
        span.style.marginRight = char === " " ? "0.5rem" : "0.05rem";
        span.style.position = "relative";
        span.style.display = "inline-block";
        span.style.fontSize = "2.5rem";
        span.style.fontWeight = "700";
        span.style.color = "#6B4226";
        span.style.filter = "drop-shadow(0 2px 4px rgba(0,0,0,0.1))";

        // Water-like fill effect
        const waterFill = document.createElement("div");
        waterFill.className = "absolute bottom-0 left-0 w-full";
        waterFill.style.height = "0%";
        waterFill.style.background =
          "linear-gradient(180deg, #60A5FA 0%, #3B82F6 50%, #1E40AF 100%)";
        waterFill.style.zIndex = "-1";
        waterFill.style.borderRadius = "0 0 50% 50%";
        waterFill.style.transform = "scaleY(0)";
        waterFill.style.transformOrigin = "bottom";

        // Animated wave overlay
        const wave = document.createElement("div");
        wave.className = "absolute top-0 left-0 w-full h-full";
        wave.style.background = `
          radial-gradient(ellipse at center top, 
            rgba(255,255,255,0.3) 0%, 
            rgba(255,255,255,0.1) 30%, 
            transparent 70%
          )
        `;
        wave.style.opacity = "0";
        wave.style.transform = "translateY(-100%)";

        waterFill.appendChild(wave);
        span.appendChild(waterFill);
        textContainerRef.current.appendChild(span);
        charRefs.current.push({
          char: span,
          waterFill,
          wave,
        });
      });

      const tl = gsap.timeline({
        onComplete: () => {
          // Smooth exit animation
          const exitTl = gsap.timeline({
            onComplete: onComplete,
          });

          // First, create a ripple effect on text
          exitTl
            .to(
              charRefs.current.map((ref) => ref.char),
              {
                scale: 1.1,
                duration: 0.2,
                stagger: 0.02,
                ease: "back.out(1.7)",
              }
            )
            .to(
              charRefs.current.map((ref) => ref.char),
              {
                scale: 1,
                duration: 0.3,
                stagger: 0.02,
                ease: "power2.out",
              },
              "-=0.1"
            )
            // Then fade out everything smoothly
            .to(
              [loadingContainerRef.current],
              {
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                ease: "power2.inOut",
              },
              "-=0.2"
            )
            .to(
              lottieRef.current,
              {
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                ease: "back.in(1.7)",
              },
              "-=0.8"
            );
        },
      });

      // Animate the Lottie container in first
      gsap.fromTo(
        lottieRef.current,
        { opacity: 0, scale: 0.8, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.7)" }
      );

      // Water fill animation for each character
      charRefs.current.forEach((ref, index) => {
        // Water fill rises
        tl.to(
          ref.waterFill,
          {
            height: "100%",
            scaleY: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          index * 0.06 + 0.5
        )
          // Wave effect
          .to(
            ref.wave,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "sine.inOut",
            },
            index * 0.06 + 0.7
          )
          .to(
            ref.wave,
            {
              opacity: 0,
              y: "100%",
              duration: 0.4,
              ease: "sine.inOut",
            },
            index * 0.06 + 1.1
          )
          // Text color change
          .to(
            ref.char,
            {
              color: "#FFFFFF",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
              duration: 0.5,
              ease: "power2.out",
            },
            index * 0.06 + 0.8
          );
      });
    }, loadingContainerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={loadingContainerRef}
      className="fixed inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center z-50 overflow-hidden"
    >
      {/* Lottie Animation */}
      <div ref={lottieRef} className="mb-8">
        <div className="w-64 h-64 filter drop-shadow-lg">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>

      {/* Text Animation Container */}
      <div className="relative w-auto px-8 py-6 bg-white/80 backdrop-blur-sm border-4 border-blue-200 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
        {/* Subtle background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent animate-pulse"></div>

        <div
          ref={textContainerRef}
          className="font-body font-semibold flex flex-wrap justify-center relative z-10"
        ></div>
      </div>
    </div>
  );
}
