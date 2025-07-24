import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { heroProductsData } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const PaperBoatScrollHero = () => {
  const heroRef = useRef(null);
  const productRef = useRef(null);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const lastScrollTime = useRef(0);
  const isAnimating = useRef(false);

  // Preload all images on component mount
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = heroProductsData.map((product, index) => {
        return new Promise((resolve) => {
          if (product.image) {
            const img = new Image();
            img.onload = () => {
              setImagesLoaded((prev) => ({ ...prev, [index]: true }));
              resolve();
            };
            img.onerror = () => {
              console.warn(`Failed to load image: ${product.image}`);
              setImagesLoaded((prev) => ({ ...prev, [index]: false }));
              resolve();
            };
            img.src = product.image;
          } else {
            setImagesLoaded((prev) => ({ ...prev, [index]: true }));
            resolve();
          }
        });
      });

      await Promise.all(imagePromises);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation when page loads
      gsap.fromTo(
        ".hero-content",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.4)",
        }
      );

      // Product bottle entrance animation
      gsap.fromTo(
        ".product-bottle",
        {
          opacity: 0,
          scale: 0,
          rotation: -45,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          delay: 0.5,
          ease: "elastic.out(1, 0.8)",
        }
      );

      // Throttled scroll-triggered product changes
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const now = Date.now();

          // Throttle updates to prevent excessive firing
          if (now - lastScrollTime.current < 16 || isAnimating.current) return;

          lastScrollTime.current = now;

          const progress = self.progress;
          const productIndex = Math.floor(progress * heroProductsData.length);
          const clampedIndex = Math.min(
            productIndex,
            heroProductsData.length - 1
          );

          if (clampedIndex !== currentProduct) {
            // Only change if image is loaded or no image required
            if (imagesLoaded[clampedIndex] !== false) {
              changeProduct(clampedIndex);
            }
          }
        },
      });

      // Floating animation for the product
      gsap.to(".product-bottle", {
        duration: 3,
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Background particles animation
      gsap.to(".particle", {
        duration: 8,
        rotation: 360,
        repeat: -1,
        ease: "none",
        stagger: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, [currentProduct, imagesLoaded]);

  const changeProduct = (index) => {
    if (index === currentProduct || isAnimating.current) return;

    isAnimating.current = true;
    setCurrentProduct(index);

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    tl.to(".product-bottle", {
      duration: 0.4,
      scale: 0.8,
      rotation: 15,
      ease: "power2.in",
    })
      .to(
        ".product-info",
        {
          duration: 0.3,
          opacity: 0,
          y: -30,
          ease: "power2.in",
        },
        0
      )
      .to(".product-bottle", {
        duration: 0.6,
        scale: 1,
        rotation: 0,
        ease: "elastic.out(1, 0.5)",
      })
      .to(
        ".product-info",
        {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
        "-=0.3"
      );
  };

  const handleProductClick = () => {
    if (isAnimating.current) return;
    const nextProduct = (currentProduct + 1) % heroProductsData.length;
    changeProduct(nextProduct);
  };

  return (
    <div ref={heroRef} className="relative overflow-hidden">
      {/* Fixed Hero Section */}
      <div className=" inset-0 w-full h-screen flex items-center justify-center pt-20">
        {/* Dynamic Background */}
        <div className="absolute top-0 inset-0 bg-[url(/images/tree_bg.png)] transition-all duration-1000 bg-no-repeat">
          {/* Background Particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`particle absolute w-4 h-4 bg-${heroProductsData[currentProduct].accentColor}/20 rounded-full`}
              style={{
                top: `${15 + i * 12}%`,
                left: `${10 + i * 15}%`,
              }}
            ></div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content relative z-10 text-center max-w-5xl w-full mx-auto px-8 md:mt-80 lg:mt-10 mt-[300px]">
          {/* Brand Title */}
          <div className="mb-8">
            <h1 className="text-6xl lg:text-8xl font-bold text-shadow-primary mb-4">
              Paper Boat
            </h1>
            <p className="text-xl text-gray-600">Drinks & Memories</p>
          </div>

          {/* Product Display */}
          <div
            ref={productRef}
            className="product-display flex flex-col lg:flex-row items-center justify-between gap-12 cursor-pointer w-full"
            onClick={handleProductClick}
          >
            {/* Product Image/Bottle */}
            <div className="product-bottle relative group">
              {heroProductsData[currentProduct].image ? (
                <div className="relative">
                  <img
                    key={`product-${currentProduct}`}
                    src={heroProductsData[currentProduct].image}
                    alt={heroProductsData[currentProduct].name}
                    className="w-74 h-96 object-contain transition-transform duration-300 group-hover:scale-110"
                    style={{
                      opacity: imagesLoaded[currentProduct] ? 1 : 0,
                      transform: `translateZ(0)`,
                      willChange: "transform, opacity",
                    }}
                    loading="eager"
                    decoding="async"
                  />

                  {/* Loading placeholder */}
                  {!imagesLoaded[currentProduct] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-48 bg-gradient-to-b from-primary to-brown rounded-t-3xl rounded-b-lg animate-pulse">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gray-800 rounded-sm"></div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-32 h-48 bg-gradient-to-b from-primary to-brown rounded-t-3xl rounded-b-lg relative shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gray-800 rounded-sm"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm rotate-90 whitespace-nowrap">
                    {heroProductsData[currentProduct].name}
                  </div>
                </div>
              )}

              <button
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-brown animate-bounce text-sm"
                onClick={handleProductClick}
                disabled={isAnimating.current}
              >
                Click to change
              </button>
            </div>

            {/* Product Information */}
            <div className="product-info text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-brown mb-4 transition-all duration-500">
                {heroProductsData[currentProduct].name}
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-md">
                {heroProductsData[currentProduct].description}
              </p>

              {/* Product Stats/Features */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <div
                  className={`px-4 py-2 bg-${heroProductsData[currentProduct].accentColor}/10 text-${heroProductsData[currentProduct].accentColor} rounded-full font-medium`}
                >
                  Natural
                </div>
                <div
                  className={`px-4 py-2 bg-${heroProductsData[currentProduct].accentColor}/10 text-${heroProductsData[currentProduct].accentColor} rounded-full font-medium`}
                >
                  Traditional
                </div>
                <div
                  className={`px-4 py-2 bg-${heroProductsData[currentProduct].accentColor}/10 text-${heroProductsData[currentProduct].accentColor} rounded-full font-medium`}
                >
                  Refreshing
                </div>
              </div>
              <Link
                to={"/drinks"}
                className="px-8 py-3 rounded-full font-semibold shadow-lg text-white bg-primary hover:scale-105 transition-transform inline-block"
              >
                Try {heroProductsData[currentProduct].name}
              </Link>
            </div>
          </div>
        </div>

        {/* Product Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroProductsData.map((_, index) => (
            <button
              key={index}
              onClick={() => changeProduct(index)}
              disabled={isAnimating.current}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProduct
                  ? `bg-${heroProductsData[currentProduct].accentColor} scale-125`
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Scroll Progress Indicator */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          <div className="w-1 h-32 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-primary to-brown transition-all duration-300 rounded-full"
              style={{
                height: `${
                  ((currentProduct + 1) / heroProductsData.length) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce z-10"></div>
    </div>
  );
};

export default PaperBoatScrollHero;
