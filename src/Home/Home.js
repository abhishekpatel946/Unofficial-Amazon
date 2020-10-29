import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V3/Phase3_Unrec_PC_Hero_1500x600_1X._CB418068982_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product />
        </div>
        <div className="home_row">
          {/* product */}
          {/* product */}
          {/* product */}
        </div>
        <div className="home_row">{/* product */}</div>
      </div>
    </div>
  );
}

export default Home;
