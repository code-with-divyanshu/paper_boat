import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaArrowRight, FaStar, FaLeaf, FaHeart } from "react-icons/fa";
import { productsHomeData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const HomeProductSection = () => {
  const containerRef = useRef(null);
  const productsRef = useRef([]);
  const ctaRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Simple heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Products animation - fixed ref array handling
      gsap.fromTo(
        productsRef.current.filter(Boolean),
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Simple hover handlers - React way
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      y: -10,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={containerRef}
      className="py-20 px-4 md:px-10 bg-gradient-to-br from-cream via-white to-softpink/10 relative overflow-hidden"
    >
      {/* Simple background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-softpink/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-brown mb-6">
            Our <span className="text-primary">Premium</span> Collection
          </h2>
          <p className="text-xl text-brown/80 max-w-3xl mx-auto leading-relaxed">
            Discover the authentic taste of India with our carefully curated
            drink categories
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-softpink mx-auto rounded-full mt-6"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productsHomeData.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                ref={(el) => (productsRef.current[index] = el)}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-peach/30"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.bgcolor} to-transparent opacity-5 group-hover:opacity-10 transition-opacity`}
                ></div>

                {/* Product Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cream/30 to-peach/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`${product.tagColor} text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg`}
                    >
                      <IconComponent className="text-xs" />
                      {product.tag}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/95 text-primary px-4 py-2 rounded-full text-lg font-bold shadow-lg border border-primary/20">
                      {product.price}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-display font-bold text-brown mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-brown/70 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* CTA Button */}
                  <Link
                    to="/drinks"
                    className=" w-full bg-gradient-to-r from-primary to-softpink text-white py-3 px-6 rounded-2xl font-semibold hover:from-softpink hover:to-primary transition-all duration-300 text-center shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>Explore More</span>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main CTA */}
        <div ref={ctaRef} className="text-center">
          <Link
            to="/drinks"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-brown to-primary text-white px-12 py-4 rounded-full text-xl font-bold hover:from-primary hover:to-brown transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105 group"
          >
            <span>Explore All Drinks Collection</span>
            <FaArrowRight className="text-lg group-hover:translate-x-2 transition-transform duration-300" />
          </Link>

          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-softpink rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProductSection;
