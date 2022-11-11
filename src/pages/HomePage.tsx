import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import HomePageCarousel, { CarouselItem } from "../components/HomePage/HomepageCarousel";
import FeaturedProducts from "../components/HomePage/FeaturedProducts";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <HomePageCarousel>
        <CarouselItem> Item 1</CarouselItem>
        <CarouselItem> Item 2</CarouselItem>
        <CarouselItem> Item 3</CarouselItem>
      </HomePageCarousel>
      <FeaturedProducts />
      Hello from HomePage!
    </>
  );
};

export default HomePage;
