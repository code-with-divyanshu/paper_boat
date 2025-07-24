import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { contactInfo } from "../constants";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const GetInTouch = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const contactInfoRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Success animation
    gsap.to(".form-container", {
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(".success-message", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      },
    });

    setIsSubmitting(false);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      gsap.set(".success-message", { opacity: 0, y: 20 });
      gsap.to(".form-container", { scale: 1, duration: 0.3 });
    }, 3000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animations
      const heroTl = gsap.timeline();

      heroTl
        .fromTo(
          ".hero-title",
          {
            scale: 0.8,
            opacity: 0,
            y: 50,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
          }
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );

      // Floating background elements
      gsap.to(".float-element-1", {
        y: -30,
        x: 20,
        rotation: 360,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".float-element-2", {
        y: -20,
        x: -15,
        rotation: -360,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      });

      gsap.to(".float-element-3", {
        y: -25,
        x: 10,
        rotation: 180,
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 4,
      });

      // Contact Info Cards Animation
      ScrollTrigger.batch(".contact-card", {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            {
              y: 100,
              opacity: 0,
              scale: 0.9,
              rotationY: 45,
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

      // Form Animation
      gsap.fromTo(
        ".form-container",
        {
          x: -100,
          opacity: 0,
          scale: 0.95,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Form Input Focus Animation
      gsap.utils.toArray(".form-input").forEach((input) => {
        input.addEventListener("focus", () => {
          gsap.to(input, {
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(243, 112, 33, 0.2)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        input.addEventListener("blur", () => {
          gsap.to(input, {
            scale: 1,
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Office Cards Animation
      ScrollTrigger.batch(".office-card", {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            {
              y: 80,
              opacity: 0,
              rotationX: -30,
            },
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.2,
            }
          );
        },
      });

      // Map Animation
      gsap.fromTo(
        ".map-container",
        {
          scale: 0.8,
          opacity: 0,
          borderRadius: "50px",
        },
        {
          scale: 1,
          opacity: 1,
          borderRadius: "24px",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text Reveal Animations
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

      // Button Hover Animations
      gsap.utils.toArray(".animated-button").forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, {
            scale: 1.05,
            y: -3,
            boxShadow: "0 15px 35px rgba(243, 112, 33, 0.4)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            scale: 1,
            y: 0,
            boxShadow: "0 8px 25px rgba(243, 112, 33, 0.2)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="get-in-touch-container bg-cream overflow-hidden"
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-[url(/images/phone.png)] bg-cover bg-no-repeat overflow-hidden"
      >
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="float-element-1 absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-xl"></div>
          <div className="float-element-2 absolute bottom-32 right-16 w-56 h-56 bg-softpink/30 rounded-full blur-2xl"></div>
          <div className="float-element-3 absolute top-1/3 right-1/4 w-32 h-32 bg-peach/40 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/30 rounded-full blur-md"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="hero-title text-6xl md:text-7xl lg:text-9xl font-black text-primary mb-8 tracking-tight">
            Get in Touch
          </h1>
          <p className="hero-subtitle text-2xl md:text-3xl lg:text-4xl text-brown mb-8 font-bold">
            Let's Create Something Amazing Together
          </p>
          <p className="hero-description text-lg md:text-xl text-primary mb-12 max-w-3xl mx-auto leading-relaxed font-semibold">
            Have a question about our products? Want to collaborate? Or just
            want to share your Paper Boat memories? We'd love to hear from you.
            Our team is here to help make every interaction as refreshing as our
            drinks.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-32 bg-gradient-to-b from-cream to-lightgrey">
        <div className="container mx-auto px-6">
          <h2 className="reveal-text text-5xl lg:text-6xl font-black text-center text-brown mb-20">
            How to <span className="text-primary">Reach</span> Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card group">
                <a
                  href={info.link}
                  target="_blank"
                  className="block bg-cream p-8 rounded-3xl shadow-xl border border-softpink/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brown mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-brown/70 leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        ref={formRef}
        className="py-32 bg-gradient-to-br from-peach/30 to-softpink/30"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div className="form-container relative">
              <h2 className="reveal-text text-5xl lg:text-6xl font-black text-brown mb-8">
                Send Us a <span className="text-primary">Message</span>
              </h2>
              <p className="reveal-text text-xl text-brown/80 mb-12 leading-relaxed">
                Fill out the form below and we'll get back to you within 24
                hours. We're excited to hear from you!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brown font-semibold mb-3 text-lg">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input w-full px-6 py-4 rounded-2xl border-2 border-softpink/30 bg-cream focus:border-primary focus:outline-none text-brown text-lg shadow-lg transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-brown font-semibold mb-3 text-lg">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input w-full px-6 py-4 rounded-2xl border-2 border-softpink/30 bg-cream focus:border-primary focus:outline-none text-brown text-lg shadow-lg transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brown font-semibold mb-3 text-lg">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input w-full px-6 py-4 rounded-2xl border-2 border-softpink/30 bg-cream focus:border-primary focus:outline-none text-brown text-lg shadow-lg transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-brown font-semibold mb-3 text-lg">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input w-full px-6 py-4 rounded-2xl border-2 border-softpink/30 bg-cream focus:border-primary focus:outline-none text-brown text-lg shadow-lg transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Questions</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-brown font-semibold mb-3 text-lg">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="form-input w-full px-6 py-4 rounded-2xl border-2 border-softpink/30 bg-cream focus:border-primary focus:outline-none text-brown text-lg shadow-lg transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="animated-button w-full bg-gradient-to-r from-primary to-primary/80 text-cream px-12 py-6 rounded-2xl text-xl font-bold shadow-lg transition-all duration-300 transform hover:shadow-2xl disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cream mr-3"></div>
                      Sending Message...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>

              {/* Success Message */}
              <div className="success-message absolute inset-0 bg-cream/95 rounded-3xl flex items-center justify-center opacity-0 pointer-events-none">
                <div className="text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-brown/80 text-lg">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Image/Info */}
            <div className="space-y-8">
              <div className="bg-cream p-8 rounded-3xl shadow-xl border border-softpink/50">
                <h3 className="text-3xl font-bold text-brown mb-6">
                  Why Choose Paper Boat?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🌟</div>
                    <div>
                      <h4 className="font-bold text-brown mb-1">
                        Authentic Flavors
                      </h4>
                      <p className="text-brown/70">
                        Traditional Indian beverages crafted with love
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🌱</div>
                    <div>
                      <h4 className="font-bold text-brown mb-1">
                        Natural Ingredients
                      </h4>
                      <p className="text-brown/70">
                        No artificial flavors, colors, or preservatives
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">❤️</div>
                    <div>
                      <h4 className="font-bold text-brown mb-1">
                        Made with Care
                      </h4>
                      <p className="text-brown/70">
                        Every bottle tells a story of tradition and quality
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-peach/20 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-brown mb-4">
                  Quick Response Promise
                </h3>
                <p className="text-brown/80 leading-relaxed mb-4">
                  We value your time and strive to respond to all inquiries
                  within 24 hours during business days.
                </p>
                <div className="flex items-center space-x-2 text-primary font-semibold">
                  <span>⚡</span>
                  <span>Average response time: 4 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="py-32 bg-cream">
        <div className="container mx-auto px-6">
          <h2 className="reveal-text text-5xl lg:text-6xl font-black text-center text-brown mb-20">
            Find Us on the <span className="text-primary">Map</span>
          </h2>
          <div className="map-container max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-peach/30 to-softpink/30 p-4 rounded-3xl shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.927727335794!2d77.7159082745466!3d12.976474314772458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae10d5f69b2b45%3A0x9d9e6a90766781a1!2sHector%20Beverages%20(Paperboat)!5e0!3m2!1sen!2sin!4v1753384727300!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl shadow-xl"
                width="100%"
                height="500"
                style={{ border: 0, borderRadius: "20px" }}
              ></iframe>
            </div>
            <div className="text-center mt-8">
              <p className="text-brown/80 text-lg mb-4">
                Visit our head office for meetings, tours, or just to say hello!
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-button inline-block bg-primary text-cream px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
