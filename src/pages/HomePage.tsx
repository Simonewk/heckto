import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import CarouselSlide from "../components/Carousel/CarouselSlide";
import FeaturedProducts from "../components/HomePage/FeaturedProducts";

import mainSliderImg1 from "assets/images/mainSliderImg1.png"

const HomePage = () => {
  return (
    <>
      <TopBar/>
      <NavBar/>
      <Carousel>
        <CarouselSlide><img src={mainSliderImg1} alt="sample alt title"/></CarouselSlide>
        <CarouselSlide><img src={mainSliderImg1} alt="sample alt title"/></CarouselSlide>
        <CarouselSlide><img src={mainSliderImg1} alt="sample alt title"/></CarouselSlide>
      </Carousel>
      <FeaturedProducts/>
      Hello from HomePage!
    </>
  );
};

export default HomePage;
