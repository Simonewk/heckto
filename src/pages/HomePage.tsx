import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import HomePageSlider from "../components/HomePage/HomepageSlider";
import FeaturedProducts from "../components/HomePage/FeaturedProducts";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <HomePageSlider />
      <FeaturedProducts />
      Hello from HomePage!
    </>
  );
};

export default HomePage;
