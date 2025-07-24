import PaperBoatHero from "../sections/Hero/Hero";
import HeroSection from "../sections/Hero/SectionA";
import HomeProductSection from "../sections/HomeProductSection";
import AttractiveSwiper from "../components/Slider";
import { homeSlideData } from "../constants";
import AnimatedSingleImage from "../components/AnimatedSingleImage";
import ImageTextAnimate from "../sections/ImageText";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PaperBoatHero />
      <HeroSection />
      <ImageTextAnimate />
      <HomeProductSection />
      <AttractiveSwiper
        slideData={homeSlideData}
        url={`/images/notebook_bg.png`}
      />
      <AnimatedSingleImage />
    </div>
  );
};

export default Home;
