import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// Import  data
import { publicLinks, authLinks } from "../constants/index";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

// Party Popper Component
const PartyPopper = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Confetti particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        >
          <div
            className="w-3 h-3 rounded-full opacity-80"
            style={{
              backgroundColor: [
                "var(--color-primary)",
                "var(--color-peach)",
                "var(--color-softpink)",
                "#ff6b9d",
                "#4ecdc4",
              ][Math.floor(Math.random() * 5)],
            }}
          />
        </div>
      ))}

      {/* Celebration message */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-primary text-peach px-8 py-4 rounded-2xl shadow-2xl animate-pulse">
          <h2 className="text-2xl font-bold text-center mb-2">
            🎉 Welcome Aboard! 🎉
          </h2>
          <p className="text-center">Thank you for subscribing to PaperBoat!</p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setShowCelebration(true);
      setEmail("");

      // Hide celebration after 4 seconds
      setTimeout(() => {
        setShowCelebration(false);
      }, 2000);
    }
  };

  return (
    <footer className="relative overflow-hidden mt-40">
      {/* Party Popper Effect */}
      <PartyPopper show={showCelebration} />

      {/* Background decoration */}
      <img
        src="./images/footer_svg.svg"
        alt="footer background"
        className="w-full"
      />

      <div className="relative text-xl">
        <div className="absolute inset-0 bg-footer text-primary text-xl"></div>
        {/* Floating shapes with glass effect */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-peach/15 rounded-full blur-xl animate-pulse delay-700"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section with Logo Image */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                {/* PaperBoat Logo Image */}
                <img
                  src="./images/paper_boat_logo-logo.png"
                  alt="PaperBoat Logo"
                  className="w-30 h-30 object-contain"
                />
              </div>

              <p className="text-brown mb-6 leading-relaxed max-w-md">
                Experience the authentic taste of traditional Indian drinks with
                PaperBoat. Made with natural ingredients and childhood memories.
              </p>
            </div>

            {/* Quick Links - Using your actual navigation links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {publicLinks.map((linkItem) => (
                  <li key={linkItem.id}>
                    <Link
                      to={linkItem.link}
                      className="text-brown hover:text-primary transition-all duration-300 hover:translate-x-1 transform inline-block hover:scale-105"
                    >
                      {linkItem.name}
                    </Link>
                  </li>
                ))}
                {/* Auth Links */}
                {authLinks.map((authItem) => (
                  <li key={authItem.id} className="">
                    <Link
                      to={authItem.link}
                      className="text-brown hover:text-primary transition-all duration-300 hover:translate-x-1 transform hover:scale-105 flex items-center gap-2"
                    >
                      <authItem.icon size={14} />
                      {authItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter with Glass Effect */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Stay Connected
              </h3>
              <p className="text-brown mb-4">
                Subscribe to get updates on new flavors and exclusive offers.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-cream border border-lightgrey text-brown placeholder-brown/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-peach rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Our Brands Section  */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-primary mb-6 text-center">
              Our Brands
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-4xl mx-auto">
              <div className="flex flex-col items-center group">
                <div className="bg-cream/10 rounded-2xl p-4 hover:bg-cream/20 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 w-full">
                  <img
                    src="./images/paper_boat_logo-img.png"
                    alt="PaperBoat Drinks"
                    className="w-20 h-20 object-contain mx-auto"
                  />
                </div>
                <p className="text-brown font-medium mt-3 text-center">
                  PaperBoat
                </p>
              </div>

              <div className="flex flex-col items-center group">
                <div className="bg-cream/10 rounded-2xl p-4 hover:bg-cream/20 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 w-full">
                  <img
                    src="./images/swing_logo.png"
                    alt="Swing"
                    className="w-20 h-20 object-contain mx-auto"
                  />
                </div>
                <p className="text-brown font-medium mt-3 text-center">Swing</p>
              </div>

              <div className="flex flex-col items-center group">
                <div className="bg-cream/10 rounded-2xl p-4 hover:bg-cream/20 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 w-full">
                  <img
                    src="./images/swing_jeera_logo.png"
                    alt="Swing Jeera"
                    className="w-20 h-20 object-contain mx-auto"
                  />
                </div>
                <p className="text-brown font-medium mt-3 text-center">
                  Swing Jeera
                </p>
              </div>

              <div className="flex flex-col items-center group">
                <div className="bg-cream/10 rounded-2xl p-4 hover:bg-cream/20 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 w-full">
                  <img
                    src="./images/zero_logo.png"
                    alt="Zero"
                    className="w-20 h-20 object-contain mx-auto"
                  />
                </div>
                <p className="text-brown font-medium mt-3 text-center">Zero</p>
              </div>
            </div>
          </div>

          {/* Glass Divider */}
          <div className="h-px bg-lightgrey/30 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <span className="font-semibold tracking-wide text-peach">
                Copyright © {new Date().getFullYear()} Hector Beverages Private
                Limited. All Rights Reserved.
              </span>
            </div>

            {/* Social Icons with Glass Effect */}
            <div className="flex gap-4">
              <Link
                to="https://www.facebook.com/paperboatdrinks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-cream border border-lightgrey flex items-center justify-center text-brown hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm"
              >
                <FaFacebookF size={18} />
              </Link>
              <Link
                to="https://x.com/paperboatdrinks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-cream border border-lightgrey flex items-center justify-center text-brown hover:text-sky-500 hover:bg-sky-50 hover:border-sky-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm"
              >
                <FaXTwitter size={18} />
              </Link>
              <Link
                to="https://www.instagram.com/paperboatdrinks/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-cream border border-lightgrey flex items-center justify-center text-brown hover:text-pink-500 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm"
              >
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-6 pt-6 border-t border-lightgrey/30 flex flex-wrap justify-center gap-6">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
              "Sitemap",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-brown hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
