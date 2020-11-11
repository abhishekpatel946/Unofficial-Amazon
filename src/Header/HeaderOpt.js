import React from "react";
import "./HeaderOpt.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function HeaderOpt() {
  return (
    <div className="headerOpt">
      <div className="headerOptions">
        <div className="header_locationIcon">
          <LocationOnIcon />
        </div>
        <div className="header_address">
          <span>select your address</span>
        </div>
        <div className="header_category">
          <span>new release</span>
          <span>today's deal</span>
          <span>best seller</span>
          <span>amazon basics</span>
          <span>customer service</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderOpt;
