import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Link } from "react-router-dom";
import { companyValues, timeline } from "../constants";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const About = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  const parallaxRef = useRef(null);

  const [countersAnimated, setCountersAnimated] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Smooth scrolling setup
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Advanced Hero Animations
      const heroTl = gsap.timeline();

      // Animate the title
      heroTl
        .fromTo(
          ".hero-title",
          {
            scale: 0.5,
            rotation: -10,
            opacity: 0,
            transformOrigin: "left center", // Changed from center to left
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
          }
        )
        // Animate each paragraph with stagger
        .fromTo(
          ".hero-description",
          { y: 50, opacity: 0, skewY: 2 },
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2, // This will animate each paragraph one after another
          },
          "-=1"
        )

        // Animate the hero image
        .fromTo(
          ".hero-image-block",
          {
            opacity: 0,
            scale: 1.2,
            x: 100, // Slide in from right
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=1.5" // Start with the title
        );

      // Floating animations with physics
      gsap.to(".float-1", {
        y: -30,
        rotation: 360,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".float-2", {
        y: -20,
        x: 10,
        rotation: -360,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      });

      gsap.to(".float-3", {
        y: -25,
        x: -15,
        rotation: 180,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      });

      // Story Section with Advanced ScrollTrigger
      gsap.fromTo(
        ".story-content",
        {
          x: -200,
          opacity: 0,
          rotationY: -45,
          transformOrigin: "right center",
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        ".story-image",
        {
          x: 200,
          opacity: 0,
          scale: 0.7,
          rotation: 10,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Parallax background
      gsap.to(".parallax-bg", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Timeline with staggered reveal
      ScrollTrigger.batch(".timeline-item", {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            {
              y: 150,
              opacity: 0,
              scale: 0.8,
              rotation: 5,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.2,
              ease: "back.out(1.4)",
              stagger: 0.2,
            }
          );
        },
        onLeave: (elements) => {
          gsap.to(elements, {
            opacity: 0.3,
            scale: 0.95,
            duration: 0.5,
          });
        },
        onEnterBack: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
          });
        },
      });

      // Team cards with morphing animations
      ScrollTrigger.batch(".team-card", {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            {
              y: 100,
              opacity: 0,
              scale: 0.5,
              rotationY: 90,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotationY: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.1,
            }
          );
        },
      });

      // Values cards with 3D flip
      ScrollTrigger.batch(".value-card", {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            {
              rotationX: -90,
              opacity: 0,
              transformOrigin: "center bottom",
            },
            {
              rotationX: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
              stagger: 0.1,
            }
          );
        },
      });

      // Advanced text reveals
      gsap.utils.toArray(".reveal-text").forEach((text) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
            y: 50,
            skewY: 7,
          },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Smooth scroll for internal links
      gsap.utils.toArray("[data-scroll-to]").forEach((trigger) => {
        trigger.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.querySelector(
            trigger.getAttribute("data-scroll-to")
          );
          gsap.to(window, {
            duration: 1.5,
            scrollTo: target,
            ease: "power2.inOut",
          });
        });
      });

      // Mouse parallax effect
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;

        gsap.to(".mouse-parallax", {
          x: x * 20,
          y: y * 20,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(".mouse-parallax-slow", {
          x: x * 10,
          y: y * 10,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, [countersAnimated]);

  return (
    <div
      ref={containerRef}
      className="about-us-container bg-cream overflow-hidden"
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-gradient-to-br from-peach via-softpink to-cream pt-20"
      >
        {/* Container for two-column layout */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* TEXT COLUMN - Left Side */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 relative z-10">
            {/* Animated Background Elements for text side */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="float-1 mouse-parallax absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
              <div className="float-2 mouse-parallax-slow absolute bottom-32 right-16 w-48 h-48 bg-softpink/30 rounded-full blur-2xl"></div>
              <div className="float-3 mouse-parallax absolute top-1/3 right-1/4 w-24 h-24 bg-peach/40 rounded-full blur-lg"></div>
              <div className="mouse-parallax absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-md"></div>
            </div>

            <div className="relative z-20 max-w-2xl">
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-brown mb-8 tracking-tight leading-tight">
                All‐in from day <span className="text-primary">one</span>
              </h1>

              <div className="space-y-6">
                <p className="hero-description text-base md:text-lg text-brown/80 leading-relaxed">
                  Any drink can be made to taste good. Or feel nutritious. But
                  how many drinks tell a story? Because when companies get
                  together and dole out a drink to the parched populace, it's
                  practicality. But when history and geography conspire to make
                  a drink favoured through the ages, that's destiny.
                </p>

                <p className="hero-description text-base md:text-lg text-brown/80 leading-relaxed">
                  A culmination of efforts. Modified through trial and error.
                  Perfected with every passing age. From a king's royal cook to
                  a soldier's flask to a peace offering made by warring clans to
                  a mother conjuring something special for her son's return to a
                  grand celebration of harvest. Everyone had something to
                  contribute.
                </p>

                <p className="hero-description text-base md:text-lg text-brown/80 leading-relaxed">
                  And it's their additions (and subtractions) that ultimately
                  made their way into food carts in village fairs. And while
                  we've all experienced the joy of tasting these drinks at these
                  carts at one point or the other, we've also experienced the
                  often awful gastronomical aftermath of these little joys.
                </p>

                <p className="hero-description text-base md:text-lg text-brown/80 leading-relaxed">
                  So go on ahead, make new memories. We'll watch your back.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE COLUMN - Right Side */}
          <div className="w-full lg:w-1/2 relative overflow-hidden">
            {/* Parallax Background for image side */}
            <div
              ref={parallaxRef}
              className="parallax-bg absolute inset-0 bg-gradient-to-br from-primary/10 via-peach/20 to-softpink/30"
            ></div>

            {/* Main Hero Image */}
            <div className="hero-image-container h-64 lg:h-full relative">
              <img
                className="hero-image-block object-cover object-center "
                src="/src/assets/bulb.png"
                alt="Paper Boat Story - Traditional Indian Drinks"
              />

              {/* Image Overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/10"></div>

              {/* Optional: Decorative elements on image */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-cream/20 rounded-full blur-md"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-softpink/30 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section
        id="story"
        ref={storyRef}
        className="py-32 bg-cream relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="story-content">
              <h2 className="reveal-text text-5xl lg:text-6xl font-black text-brown mb-12 leading-tight">
                The Paper Boat <span className="text-primary">Legacy</span>
              </h2>
              <div className="space-y-8">
                <p className="reveal-text text-xl text-brown/80 leading-relaxed">
                  Paper Boat was born from a simple yet powerful insight: the
                  drinks we grew up with were disappearing from our lives.
                  Founded in 2013, we set out on a mission to bring back the
                  authentic flavors of traditional Indian beverages.
                </p>
                <p className="reveal-text text-xl text-brown/80 leading-relaxed">
                  Our journey began with recreating the taste of aam panna and
                  jaljeera, drinks that every Indian household cherished. Today,
                  we've grown into a beloved brand that serves millions of
                  customers across the country.
                </p>
                <p className="reveal-text text-xl text-brown/80 leading-relaxed">
                  Every Paper Boat drink is crafted with love, preserving the
                  essence of tradition while embracing modern quality standards.
                  We believe that great taste comes from great ingredients and
                  genuine care.
                </p>
              </div>
            </div>
            <div className="story-image relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img
                src="/src/assets/all_product.jpeg"
                alt="Paper Boat Story"
                className="relative w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        ref={timelineRef}
        className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-lightgrey to-peach/20 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="reveal-text text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center text-brown mb-12 md:mb-16 lg:mb-20">
            Our <span className="text-primary">Journey</span> Through{" "}
            <span className="text-primary">Time</span>
          </h2>

          <div className="relative max-w-6xl mx-auto">
            {/* Animated Timeline Line - Responsive */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary to-primary/50 rounded-full"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`timeline-item relative mb-12 md:mb-16 lg:mb-20 ${
                  // Mobile: Always vertical stack
                  // Tablet & Desktop: Alternating layout
                  "flex flex-col md:flex-row md:items-center " +
                  (index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")
                }`}
              >
                {/* Content Card */}
                <div
                  className={`
            w-full md:w-1/2 
            pl-12 md:pl-0 
            ${
              index % 2 === 0
                ? "md:pr-8 lg:pr-16 md:text-right"
                : "md:pl-8 lg:pl-16 md:text-left"
            }
          `}
                >
                  <div className="bg-cream p-6 md:p-8 rounded-2xl shadow-xl border border-softpink/50 transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                    <span className="inline-block text-primary font-black text-xl md:text-2xl mb-3 md:mb-4 px-3 md:px-4 py-2 bg-primary/10 rounded-full">
                      {item.year}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-brown mb-3 md:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-brown/80 leading-relaxed text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot - Responsive Position */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-primary rounded-full border-2 md:border-4 border-cream shadow-lg z-10 hover:scale-150 transition-transform duration-300 -translate-y-2 md:translate-y-0"></div>

                {/* Image */}
                <div
                  className={`
            w-full md:w-1/2 
            pl-12 mt-6 md:mt-0 md:pl-0
            ${index % 2 === 0 ? "md:pl-8 lg:pl-16" : "md:pr-8 lg:pr-16"}
          `}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-2xl transform group-hover:rotate-3 transition-transform duration-300"></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="relative w-full h-48 md:h-56 lg:h-64 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section
        ref={teamRef}
        className="py-32 bg-cream relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <h2 className="reveal-text text-5xl lg:text-6xl font-black text-center text-brown mb-8">
            Meet Our <span className="text-primary">Founders</span>
          </h2>
          <p className="reveal-text text-xl text-brown/70 text-center mb-20 max-w-3xl mx-auto leading-relaxed">
            Four visionary entrepreneurs who combined their expertise to bring
            back the authentic taste of traditional Indian beverages
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Neeraj Kakkar - CEO */}
            <div className="team-card group perspective-1000">
              <div className="relative bg-gradient-to-b from-cream to-peach/50 rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 hover:rotate-2 transition-all duration-500 border border-softpink/50">
                <div className="relative overflow-hidden">
                  <img
                    src="/src/assets/neeraj-kakkar.jpg"
                    alt="Neeraj Kakkar"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brown mb-2">
                    Neeraj Kakkar
                  </h3>
                  <p className="text-primary font-bold mb-3 text-lg">
                    CEO & Founder
                  </p>
                  <div className="text-brown/70 mb-4 leading-relaxed text-sm space-y-2">
                    <p className="font-semibold text-brown">
                      Wharton Business School Graduate
                    </p>
                    <p>
                      8+ years at Coca-Cola before founding Hector Beverages.
                      Palmer Scholar with deep FMCG industry expertise.
                    </p>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <Link
                      to="https://www.linkedin.com/in/neeraj-kakkar-2410839/"
                      target="_blank"
                      className="text-primary hover:text-brown transition-colors transform hover:scale-125 duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Neeraj Biyani - COO */}
            <div className="team-card group perspective-1000">
              <div className="relative bg-gradient-to-b from-cream to-peach/50 rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 hover:rotate-2 transition-all duration-500 border border-softpink/50">
                <div className="relative overflow-hidden">
                  <img
                    src="/src/assets/neeraj-biyani.jpg"
                    alt="Neeraj Biyani"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brown mb-2">
                    Neeraj Biyani
                  </h3>
                  <p className="text-primary font-bold mb-3 text-lg">
                    Co-founder & COO
                  </p>
                  <div className="text-brown/70 mb-4 leading-relaxed text-sm space-y-2">
                    <p className="font-semibold text-brown">
                      Chief Operating Officer
                    </p>
                    <p>
                      Handles day-to-day operations and business processes,
                      focusing on operational excellence and scaling across
                      India's diverse markets.
                    </p>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <Link
                      to="https://www.linkedin.com/in/neerajbiyani/"
                      target="_blank"
                      className="text-primary hover:text-brown transition-colors transform hover:scale-125 duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* James Nuttall - Former CFO */}
            <div className="team-card group perspective-1000">
              <div className="relative bg-gradient-to-b from-cream to-peach/50 rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 hover:rotate-2 transition-all duration-500 border border-softpink/50">
                <div className="relative overflow-hidden">
                  <img
                    src="/src/assets/james-nuttall.jpg"
                    alt="James Nuttall"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brown mb-2">
                    James Nuttall
                  </h3>
                  <p className="text-primary font-bold mb-3 text-lg">
                    Co-founder & Former CFO
                  </p>
                  <div className="text-brown/70 mb-4 leading-relaxed text-sm space-y-2">
                    <p className="font-semibold text-brown">
                      Wharton MBA, Chemical Engineering
                    </p>
                    <p>
                      6 years at Dow Chemicals. Established the company's
                      financial foundation during early growth phase (exited
                      2015).
                    </p>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <Link
                      to="https://www.linkedin.com/in/jpnuttall/"
                      target="_blank"
                      className="text-primary hover:text-brown transition-colors transform hover:scale-125 duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Suhas Misra - Director */}
            <div className="team-card group perspective-1000">
              <div className="relative bg-gradient-to-b from-cream to-peach/50 rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 hover:rotate-2 transition-all duration-500 border border-softpink/50">
                <div className="relative overflow-hidden">
                  <img
                    src="/src/assets/suhas-misra.jpg"
                    alt="Suhas Misra"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brown mb-2">
                    Suhas Misra
                  </h3>
                  <p className="text-primary font-bold mb-3 text-lg">
                    Co-founder & Director
                  </p>
                  <div className="text-brown/70 mb-4 leading-relaxed text-sm space-y-2">
                    <p className="font-semibold text-brown">
                      IIM Calcutta MBA (2003)
                    </p>
                    <p>
                      Coca-Cola → Nokia → Founded ChannelPlay. The Aam Panna
                      inspiration came from his mother's daily flask!
                    </p>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <Link
                      to="https://www.linkedin.com/in/suhas-misra-6143245/"
                      target="_blank"
                      className="text-primary hover:text-brown transition-colors transform hover:scale-125 duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Origin Story */}
          <div className="mt-20 bg-gradient-to-r from-peach/30 to-softpink/30 rounded-3xl p-8 md:p-12">
            <h3 className="reveal-text text-3xl lg:text-5xl font-bold text-brown text-center mb-8">
              The Origin <span className="text-primary">Story</span>
            </h3>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="reveal-text text-lg md:text-xl text-brown/80 leading-relaxed">
                The idea for Paper Boat emerged during a casual office lunch
                conversation between the co-founders.
                <span className="font-semibold text-primary">
                  {" "}
                  Suhas Misra's mother would pack him Aam Panna in a flask every
                  day
                </span>
                , which sparked the realization that traditional Indian drinks
                were disappearing from the commercial market.
              </p>
              <p className="reveal-text text-lg md:text-xl text-brown/80 leading-relaxed">
                This personal connection to authentic flavors became the
                foundation of their business concept, combining their collective
                expertise from{" "}
                <span className="font-semibold text-primary">
                  Coca-Cola, Dow Chemicals, Nokia, and entrepreneurial ventures
                </span>
                to create one of India's most beloved traditional beverage
                brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className="py-32 bg-gradient-to-br from-peach via-softpink to-cream relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <h2 className="reveal-text text-5xl lg:text-6xl font-black text-center text-brown mb-20">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="value-card perspective-1000">
                <div className="bg-cream p-10 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 border border-softpink/50">
                  <div className="text-8xl mb-8 transform hover:scale-125 hover:rotate-12 transition-transform duration-500">
                    {value.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-brown mb-6">
                    {value.title}
                  </h3>
                  <p className="text-brown/80 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-brown via-brown/90 to-brown/80 text-cream text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="reveal-text text-5xl lg:text-6xl font-black mb-12">
            Join Our Journey
          </h2>
          <p className="reveal-text text-2xl mb-16 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Be part of our mission to bring traditional flavors to the modern
            world. Experience the taste of memories with every sip.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to={"/drinks"}
              className="bg-gradient-to-r from-primary to-primary/80 text-cream px-12 py-6 rounded-full text-xl font-bold hover:scale-110 hover:shadow-2xl transition-all duration-300 transform hover:-rotate-2"
            >
              Explore Our Products
            </Link>
            <Link
              to={"/getintouch"}
              className="border-4 border-cream text-cream px-12 py-6 rounded-full text-xl font-bold hover:bg-cream hover:text-brown hover:scale-110 transition-all duration-300 transform hover:rotate-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
