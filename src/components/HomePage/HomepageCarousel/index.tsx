import React from "react";
import mainSliderImg1 from "assets/images/mainSliderImg1.png";
import "./styles.scss";
import { type } from "@testing-library/user-event/dist/type";

//this component will render the image item

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

export const CarouselItem = ({ children }: Props) => {
  return <div className="carousel-item">{children}</div>;
};

//this component controls the image item. The homepageCarousel uses overflow hidden to stop user seeing all image items. Inner class controls what is active and what the user see and needs translate to move the items.
const HomePageCarousel = ({ children }: Props) => {
  return (
    <div className="homepageCarousel">
      <div className="inner" style={{ transform: "translateX(-0%" }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};

export default HomePageCarousel;
