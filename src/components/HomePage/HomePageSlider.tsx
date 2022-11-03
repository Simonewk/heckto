import React from "react";
import mainSliderImg1 from "assets/images/mainSliderImg1.png";
import "./HomePageSlider.scss";

function HomePageSlider() {
  return (
    <div>
      <img className="main-slider-show-container" src={mainSliderImg1} alt="" />
    </div>
  );
}

export default HomePageSlider;
