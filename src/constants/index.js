// Make sure you import the icons here
import { IoLogIn } from "react-icons/io5"; // Assuming io5 for IoLogIn
import { FaUserPlus } from "react-icons/fa";

export const publicLinks = [
  { id: 1, link: "/", name: "Home" },
  { id: 2, link: "/about", name: "About" },
  { id: 3, link: "/drinks", name: "Drinks" },
  { id: 4, link: "/contact_us", name: "Get in touch" },
];

export const authLinks = [
  { id: 5, link: "/login", name: "Login", icon: IoLogIn },
  { id: 6, link: "/signup", name: "Sign Up", icon: FaUserPlus },
];

// home section slide data component

export const homeSlideData = [
  {
    id: 1,
    imageUrl: "../src/assets/aam.jpg",
    alt: "aam",
  },
  {
    id: 2,
    imageUrl: "../src/assets/aam_panna.jpg",
    alt: "aam_panna",
  },
  {
    id: 3,
    imageUrl: "../src/assets/aamras.jpg",
    alt: "aamras",
  },
  {
    id: 4,
    imageUrl: "../src/assets/coconut_water.jpg",
    alt: "coconut_water",
  },
  {
    id: 5,
    imageUrl: "../src/assets/last_day_at_nani.jpg",
    alt: "last_day_at_nani",
  },
  {
    id: 6,
    imageUrl: "../src/assets/guava.jpg",
    alt: "guava",
  },
  {
    id: 7,
    imageUrl: "../src/assets/anar.jpg",
    alt: "anar",
  },
  {
    id: 8,
    imageUrl: "../src/assets/first_guava.jpg",
    alt: "first_guava",
  },
  {
    id: 9,
    imageUrl: "../src/assets/anaar_seeds.jpg",
    alt: "anaar_seeds",
  },
];
