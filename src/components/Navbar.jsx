import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { publicLinks, authLinks } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pillsRef = useRef([]);
  const menuRef = useRef();

  // Animate pills on mobile open
  useEffect(() => {
    if (mobileOpen) {
      gsap.fromTo(
        pillsRef.current,
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: "expo.out",
        }
      );
      gsap.to(menuRef.current, { x: 0, duration: 0.7, ease: "expo.out" });
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "expo.in" });
    }
  }, [mobileOpen]);

  const [scrollNav, setScrollNav] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrollNav(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] select-none
        transition-all duration-400 
        ${
          scrollNav
            ? "shadow-2xl backdrop-blur-3xl border-b border-glass-border bg-cream/95"
            : "backdrop-blur-sm border-b-0"
        }
        `}
      style={{
        background: scrollNav
          ? undefined
          : "linear-gradient(135deg,#fff8f0 40%,rgba(243,112,33,0.05) 100%)",
      }}
    >
      <nav className="max-w-[1300px] mx-auto flex justify-between items-center px-4 md:px-10">
        {/* Logo */}
        <NavLink to="/" className="relative group">
          <img
            src="images/paper_boat_logo-logo.png"
            className="w-24 md:w-28 aspect-square object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2"
            alt="logo"
          />
        </NavLink>

        <ul className="hidden lg:flex gap-3 items-center">
          {publicLinks.map((link, i) => (
            <li key={link.id}>
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  [
                    "relative font-display tracking-wide text-lg px-7 py-2.5 transition-all rounded-[999px] select-none duration-200 ring-1 ring-glass-border shadow-md bg-white bg-opacity-70 backdrop-blur text-brown",
                    "animated-border",
                    isActive
                      ? "active text-primary font-semibold shadow-xl scale-105"
                      : "hover:scale-110",
                  ].join(" ")
                }
                style={{
                  boxShadow: "0 4px 22px 0 rgba(236, 206, 196, .09)",
                }}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex gap-3 items-center">
          {user ? (
            <>
              <span className="font-medium px-6 py-2 rounded-full text-primary bg-softpink/80 shadow ring-1 ring-softpink">
                {user.username}
              </span>
              <button
                onClick={logout}
                className="font-bold bg-gradient-to-r from-primary to-softpink text-white px-7 py-2.5 rounded-[40px] shadow-lg scale-100 hover:scale-105 hover:from-softpink hover:to-primary transition-all animated-border"
                tabIndex={0}
              >
                Logout
              </button>
            </>
          ) : (
            authLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.link}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-brown text-white font-bold rounded-[40px] shadow-lg hover:scale-105 transition-transform animated-border"
              >
                {link.icon && <link.icon size={20} />}
                {link.name}
              </NavLink>
            ))
          )}
        </div>

        {/* Hamburger for mobile */}
        <button
          className="block lg:hidden p-3 bg-gradient-to-r from-primary to-softpink text-white rounded-2xl shadow-lg transition group focus:outline-none"
          onClick={() => setMobileOpen(true)}
        >
          <span className="block group-hover:rotate-90 transition-transform duration-300">
            <FaBars size={26} />
          </span>
        </button>
      </nav>

      <div
        className="lg:hidden fixed top-0 left-0 w-full h-screen z-[200] transition pointer-events-none"
        style={{ pointerEvents: mobileOpen ? "auto" : "none" }}
      >
        <div
          className={`absolute inset-0 bg-brown/30 backdrop-blur-md transition-all duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          ref={menuRef}
          className="absolute right-0 top-0 bottom-0 w-[88vw] max-w-[390px] bg-[rgba(255,253,208,0.98)] shadow-2xl border-l-2 border-glass-border px-10 pt-16 pb-10 flex flex-col gap-8"
          style={{ transform: "translateX(100%)" }}
        >
          <button
            className="absolute top-6 right-8 text-brown hover:text-primary p-2"
            onClick={() => setMobileOpen(false)}
          >
            <FaTimes size={32} />
          </button>
          <div className="flex flex-col gap-5 mt-6" style={{ minHeight: 190 }}>
            {publicLinks.map((link, i) => (
              <NavLink
                ref={(el) => (pillsRef.current[i] = el)}
                key={link.id}
                to={link.link}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  [
                    "block text-center text-lg px-4 py-3 rounded-[60px] font-bold font-display transition-all shadow focus:outline-none",
                    "animated-border",
                    isActive
                      ? "active bg-white text-primary ring-2 ring-primary scale-105 shadow-xl"
                      : "bg-white/90 text-brown hover:bg-softpink/80 hover:text-primary hover:scale-105",
                  ].join(" ")
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="border-b border-peach my-3"></div>
            {user ? (
              <button
                ref={(el) => (pillsRef.current[publicLinks.length] = el)}
                className="w-full bg-primary text-white py-3 rounded-[40px] text-lg font-bold mt-2 shadow-xl hover:scale-105 animated-border"
                onClick={() => {
                  logout();
                  setMobileOpen(false);
                }}
              >
                Logout ({user.username})
              </button>
            ) : (
              authLinks.map((link, i) => (
                <NavLink
                  ref={(el) =>
                    (pillsRef.current[publicLinks.length + 1 + i] = el)
                  }
                  key={link.id}
                  to={link.link}
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white hover:bg-brown py-3 rounded-[40px] text-lg font-bold shadow-lg hover:scale-105 transition-all animated-border"
                >
                  {link.icon && <link.icon size={20} />}
                  {link.name}
                </NavLink>
              ))
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
