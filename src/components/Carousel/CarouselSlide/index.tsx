import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

//this component will render the image item

const CarouselSlide = ({ children }: Props) => {
  return <div className="carousel-item">{children}</div>;
};

export default CarouselSlide
