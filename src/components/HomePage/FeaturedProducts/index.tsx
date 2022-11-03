import React from "react";
import "./styles.scss";

function FeaturedProducts() {
  return (
    <div className="featured-product-section-container">
      <div className="feature-product-title-container">
        <h2 className="featured-products-title">Featured Products</h2>
      </div>
      <div className="card-section-container">
        <div className="card-container">
          <div className="featred-product-card">card</div>
          <div className="featred-product-card">card</div>
          <div className="featred-product-card">card</div>
          <div className="featred-product-card">card</div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
