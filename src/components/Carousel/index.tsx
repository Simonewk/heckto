import React from "react";

import "./styles.scss";

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

//this component controls the image item. The homepageCarousel uses overflow hidden to stop user seeing all image items. Inner class controls what is active and what the user see and needs translate to move the items.
const Carousel = ({ children }: Props) => {
  return (
    <div className="carousel">
      <div className="carousel__slide">
        {children}
      </div>
    </div>
  );
};

export default Carousel;
