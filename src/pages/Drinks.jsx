import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProductDatacategories } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Drinks = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get current category data
  const currentCategory = ProductDatacategories.find(
    (cat) => cat.id === selectedCategory
  );

  // Enhanced color mapping for category backgrounds
  const getCategoryBgColor = (bgcolor) => {
    const colorMap = {
      "#bfd380": "bg-gradient-to-br from-green-200 to-green-300",
      "#ffd6e2": "bg-gradient-to-br from-pink-200 to-pink-300",
      "#ffdb8a": "bg-gradient-to-br from-yellow-200 to-yellow-300",
      "#cd9aa4": "bg-gradient-to-br from-rose-300 to-rose-400",
      "#e1bee7": "bg-gradient-to-br from-purple-200 to-purple-300",
      "#efb9c3": "bg-gradient-to-br from-pink-300 to-rose-300",
      "#76d1a7": "bg-gradient-to-br from-emerald-200 to-emerald-300",
    };
    return colorMap[bgcolor] || "bg-gradient-to-br from-lightgrey to-peach";
  };

  // Convert hex to Tailwind-like background for modal
  const getModalBgColor = (bgcolor) => {
    const colorMap = {
      "#bfd380": "from-green-100/50 to-green-200/30",
      "#ffd6e2": "from-pink-100/50 to-pink-200/30",
      "#ffdb8a": "from-yellow-100/50 to-yellow-200/30",
      "#cd9aa4": "from-rose-200/50 to-rose-300/30",
      "#e1bee7": "from-purple-100/50 to-purple-200/30",
      "#efb9c3": "from-pink-200/50 to-rose-200/30",
      "#76d1a7": "from-emerald-100/50 to-emerald-200/30",
    };
    return colorMap[bgcolor] || "from-peach/30 to-softpink/20";
  };

  // Handle category selection with smooth scroll
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);

    // Animate category switch
    gsap.to(".products-grid", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        gsap.to(".products-grid", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      },
    });

    // Smooth scroll to products section
    gsap.to(window, {
      duration: 1,
      scrollTo: productsRef.current,
      ease: "power2.inOut",
    });
  };

  // Handle product click and modal opening
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    // Animate modal opening
    gsap.fromTo(
      ".modal-overlay",
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      ".modal-content",
      { scale: 0.8, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 0.1,
      }
    );
  };

  // Close modal
  const closeModal = () => {
    gsap.to(".modal-content", {
      scale: 0.8,
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(".modal-overlay", {
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
      onComplete: () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
        // Restore body scroll
        document.body.style.overflow = "unset";
      },
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        ".hero-title",
        { y: 100, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "back.out(1.7)" }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
      );

      // Categories animation on scroll
      ScrollTrigger.batch(".category-tab", {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { y: 80, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
            }
          );
        },
      });

      // Products animation on scroll
      ScrollTrigger.batch(".product-card", {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { y: 100, opacity: 0, rotationY: 45 },
            {
              y: 0,
              opacity: 1,
              rotationY: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.1,
            }
          );
        },
        onLeave: (elements) => {
          gsap.to(elements, { opacity: 0.7, scale: 0.95, duration: 0.5 });
        },
        onEnterBack: (elements) => {
          gsap.to(elements, { opacity: 1, scale: 1, duration: 0.5 });
        },
      });

      // Floating background elements
      gsap.to(".float-element", {
        y: -30,
        rotation: 360,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <div
      ref={containerRef}
      className="drinks-page bg-cream min-h-screen overflow-hidden"
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center  bg-[url(/images/drink_hero.svg)] bg-no-repeat bg-cover bg-center bacdro overflow-hidden"
      >
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div className="float-element absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-xl"></div>
          <div className="float-element absolute bottom-32 right-16 w-56 h-56 bg-softpink/30 rounded-full blur-2xl"></div>
          <div className="float-element absolute top-1/3 right-1/4 w-32 h-32 bg-peach/40 rounded-full blur-lg"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="hero-title text-6xl md:text-7xl lg:text-9xl font-black text-primary mb-8 tracking-tight">
            Our Drinks
          </h1>
          <p className="hero-subtitle text-2xl md:text-3xl lg:text-4xl text-brown mb-12 font-bold max-w-4xl mx-auto leading-relaxed">
            Discover the authentic taste of traditional Indian beverages,
            crafted with love and memories
          </p>
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section
        ref={categoriesRef}
        className="py-24 bg-gradient-to-b from-lightgrey to-cream relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-softpink/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-brown mb-6">
              Choose Your Flavor Journey
            </h2>
            <p className="text-xl text-brown/70 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse collection of authentic Indian beverages, each
              crafted with traditional recipes and modern quality standards
            </p>
          </div>

          {/* Enhanced Category Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ProductDatacategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`category-tab group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  selectedCategory === category.id
                    ? "ring-4 ring-primary shadow-2xl scale-105"
                    : "hover:shadow-xl"
                }`}
              >
                {/* Dynamic background based on category */}
                <div
                  className={`absolute inset-0 ${getCategoryBgColor(
                    category.bgcolor
                  )} opacity-80`}
                ></div>

                {/* Overlay for selected state */}
                {selectedCategory === category.id && (
                  <div className="absolute inset-0 bg-primary/20"></div>
                )}

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className={`text-lg font-bold mb-2 transition-colors ${
                      selectedCategory === category.id
                        ? "text-brown"
                        : "text-brown/80 group-hover:text-brown"
                    }`}
                  >
                    {category.name}
                  </h3>

                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm text-brown/60 group-hover:text-brown/80">
                      {category.products.length} items
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        selectedCategory === category.id
                          ? "bg-primary text-cream"
                          : "bg-brown/20 text-brown group-hover:bg-primary group-hover:text-cream"
                      } transition-colors`}
                    >
                      {category.products.length}
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-32 bg-cream relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-brown mb-4">
              {currentCategory?.name}
            </h2>
            <p className="text-xl text-brown/70 max-w-2xl mx-auto">
              Explore our carefully crafted selection of{" "}
              {currentCategory?.name.toLowerCase()}
            </p>
          </div>

          {/* Products Grid */}
          <div className="products-grid grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentCategory?.products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="product-card group cursor-pointer"
              >
                <div className="bg-cream rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-softpink/50 hover:shadow-2xl">
                  {/* Product Image - Fixed aspect ratio */}
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain bg-gradient-to-br from-peach/20 to-softpink/20 group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjM3MDIxIiBvcGFjaXR5PSIwLjEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWQ0MDM3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UGFwZXIgQm9hdDwvdGV4dD48L3N2Zz4=";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-primary text-cream px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                      ₹{product.price}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brown mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-brown/70 mb-4 line-clamp-2 text-sm leading-relaxed">
                      {product.description.slice(0, 120)}...
                    </p>

                    <button className="w-full bg-gradient-to-r from-primary to-primary/80 text-cream py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Modal with proper z-index and category background */}
      {isModalOpen && selectedProduct && (
        <div
          className="modal-overlay fixed inset-0 bg-brown/80 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ zIndex: 9999 }}
        >
          <div
            className={`modal-content bg-gradient-to-br ${getModalBgColor(
              currentCategory?.bgcolor
            )} backdrop-blur-sm border border-white/20 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl`}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 w-12 h-12 bg-primary text-cream rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 z-20 shadow-lg"
              >
                ✕
              </button>

              {/* Modal Content */}
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Product Image */}
                <div className="relative">
                  <div className="bg-cream/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-96 object-contain rounded-xl"
                      onError={(e) => {
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjM3MDIxIiBvcGFjaXR5PSIwLjEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNWQ0MDM3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UGFwZXIgQm9hdDwvdGV4dD48L3N2Zz4=";
                      }}
                    />
                  </div>
                  <div className="absolute top-8 left-8 bg-primary text-cream px-6 py-3 rounded-full font-bold text-2xl shadow-lg">
                    ₹{selectedProduct.price}
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-center bg-cream/60 backdrop-blur-sm rounded-2xl p-6">
                  <h2 className="text-4xl lg:text-5xl font-black text-brown mb-6">
                    {selectedProduct.name}
                  </h2>

                  <div className="mb-8">
                    <p className="text-brown/80 leading-relaxed text-lg">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-6">
                    <span className="inline-block bg-primary/20 text-brown px-4 py-2 rounded-full text-sm font-semibold">
                      {currentCategory?.name}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-primary to-primary/80 text-cream py-4 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      Add to Cart - ₹{selectedProduct.price}
                    </button>
                    <button
                      onClick={closeModal}
                      className="w-full border-2 border-brown text-brown py-4 rounded-full text-xl font-bold hover:bg-brown hover:text-cream transition-all duration-300"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drinks;
