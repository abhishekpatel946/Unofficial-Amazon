import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon-logo"
      />
      <div className="header_search">
        <input
          className="header_searchIn"
          type="text"
          placeholder="Search here"
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_options">
          <snap className="header_optionsLineOne">Hello, Guest</snap>
          <snap className="header_optionsLineTwo">SignIn</snap>
        </div>
        <div className="header_options">
          <snap className="header_optionsLineOne">Return's</snap>
          <snap className="header_optionsLineTwo">& Orders</snap>
        </div>
        <div className="header_options">
          <snap className="header_optionsLineOne">Your</snap>
          <snap className="header_optionsLineTwo">Prime</snap>
        </div>
        <div className="header_optionCart">
          <ShppingCartIcon />
          <span className="header_optionCart_cartCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
