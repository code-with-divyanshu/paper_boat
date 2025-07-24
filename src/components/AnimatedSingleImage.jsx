import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const AnimatedSingleImage = () => {
  const imageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate image on mount
  useEffect(() => {
    if (imageRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.1, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
        }
      );
      // Subtle zoom effect
      tl.to(imageRef.current, {
        scale: 1.02,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, [isMobile]);

  const desktopImage = "./images/how_to_make_boat.jpg";
  const mobileImage = "./images/how_to_make_mb.jpg";

  return (
    <div className="w-full h-full relative overflow-hidden mt-20">
      <img
        ref={imageRef}
        src={isMobile ? mobileImage : desktopImage}
        alt="Animated View"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default AnimatedSingleImage;
