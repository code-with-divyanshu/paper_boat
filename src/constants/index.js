import { IoLogIn } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { FaStar, FaLeaf, FaHeart } from "react-icons/fa";

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

// hero section data

export const heroProductsData = [
  {
    name: "Traditional Drinks",
    accentColor: "primary",
    image: "/src/assets/treditional_tile.png",
    description: "Authentic traditional flavors",
  },
  {
    name: "Sip and Snack",
    accentColor: "primary",
    description: "Perfect snacking companion",
    image: "src/assets/sip_snack_tile.png",
  },
  {
    name: "Vitamin D Drink",
    accentColor: "primary",
    image: "/src/assets/vitamin_tile.png",
    description: "Healthy vitamin enriched drink",
  },
  {
    name: "Low Sugar",
    accentColor: "primary",
    description: "Health conscious choice",
    image: "src/assets/low_sugar_tile.png",
  },
  {
    name: "Fruit Juices",
    accentColor: "primary",
    description: "Fresh fruit extracts",
    image: "src/assets/swing_tile.png",
  },
  {
    name: "Coconut Water",
    accentColor: "primary",
    image: "src/assets/Coconut_Water.png",
    description: "Natural coconut refreshment",
  },
];

// home product section data

export const productsHomeData = [
  {
    id: 1,
    name: "Traditional Drinks",
    bgcolor: "from-[#849C3A]",
    image: "/src/assets/treditional_tile.png",
    description: "Authentic traditional flavors",
    price: "₹25-35",
    tag: "Heritage",
    icon: FaStar,
    tagColor: "bg-primary",
  },
  {
    id: 2,
    name: "Sip and Snack",
    bgcolor: "from-[#B1506B]",
    description: "Perfect snacking companion",
    image: "/src/assets/sip_snack_tile.png",
    price: "₹30-40",
    tag: "Combo",
    icon: FaHeart,
    tagColor: "bg-brown",
  },
  {
    id: 3,
    name: "Vitamin D Drink",
    bgcolor: "from-[#849C3A]",
    image: "/src/assets/vitamin_tile.png",
    description: "Healthy vitamin enriched drink",
    price: "₹35-45",
    tag: "Healthy",
    icon: FaLeaf,
    tagColor: "bg-primary",
  },
  {
    id: 4,
    name: "Low Sugar",
    bgcolor: "from-[#B1506B]",
    description: "Health conscious choice",
    image: "/src/assets/low_sugar_tile.png",
    price: "₹28-38",
    tag: "Diet",
    icon: FaHeart,
    tagColor: "bg-brown",
  },
  {
    id: 5,
    name: "Fruit Juices",
    bgcolor: "from-[#B1506B]",
    description: "Fresh fruit extracts",
    image: "/src/assets/swing_tile.png",
    price: "₹25-35",
    tag: "Fresh",
    icon: FaStar,
    tagColor: "bg-primary",
  },
  {
    id: 6,
    name: "Coconut Water",
    bgcolor: "from-[#849C3A]",
    image: "/src/assets/Coconut_Water.png",
    description: "Natural coconut refreshment",
    price: "₹20-30",
    tag: "Natural",
    icon: FaLeaf,
    tagColor: "bg-brown",
  },
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
