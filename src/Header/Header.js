import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../ContextProvider/StateProvider";
import { auth } from "../Firebase/firebase";

function Header() {
  const [{ cart, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      // signOut on press
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="header_search">
        <input
          className="header_searchIn"
          type="text"
          placeholder="Search here"
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_options" onClick={handleAuthentication}>
            <snap className="header_optionsLineOne">Hello, Guest</snap>
            <snap className="header_optionsLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </snap>
          </div>
        </Link>
        <div className="header_options">
          <snap className="header_optionsLineOne">Return's</snap>
          <snap className="header_optionsLineTwo">& Orders</snap>
        </div>
        <div className="header_options">
          <snap className="header_optionsLineOne">Your</snap>
          <snap className="header_optionsLineTwo">Prime</snap>
        </div>
        <Link to="/checkout">
          <div className="header_optionCart">
            <ShppingCartIcon />
            <span className="header_optionCart_cartCount">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
