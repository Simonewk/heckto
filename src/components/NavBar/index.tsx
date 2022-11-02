import React from "react";
import "./styles.scss";
import searchIcon from "../../imgs/searchIcon.svg";

function index() {
  return (
    <div>
      <div className="navbar-container">
        <div className="content-container">
          <div className="title-nav">
            <h1 className="title">Hekto</h1>
            <div className="navs">
              <ul>
                <li className="nav">Home</li>
                <li className="nav">Products</li>
                <li className="nav">Blog</li>
                <li className="nav">Shop</li>
                <li className="nav">Contacts</li>
              </ul>
            </div>
          </div>
          <div className="searchbar-wraper">
            <form className="searchbar">
              <input type="text" className="search-input" />

              <button className="searchbar-button" type="submit" value="Search">
                <img src={searchIcon} alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
