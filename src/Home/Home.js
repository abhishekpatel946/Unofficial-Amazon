import React from "react";
import "./Home.css";
import Categories from "../Categories/Categories";
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
          <Categories img="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/HVE/Jup20/NAVs/DesktopShoveler_1X_WL_ph3._CB418076692_.jpg" />
          <Categories img="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/HVE/Jup20/NAVs/DesktopShoveler_1X_CEPC_ph3._CB418076693_.jpg" />
          <Categories img="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/HVE/Jup20/NAVs/DesktopShoveler_1X_LATV_ph3._CB418076693_.jpg" />
          <Categories img="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/HVE/Jup20/NAVs/DesktopShoveler_1X_SL_ph3._CB418076693_.jpg" />
          <Categories img="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/HVE/Jup20/NAVs/DesktopShoveler_1X_MEDIA_ph3._CB418076693_.jpg" />
          <Categories img="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/HVE/Jup20/NAVs/DesktopShoveler_1X_CONS_ph3._CB418076693_.jpg" />
          <Categories img="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/HVE/Jup20/NAVs/DesktopShoveler_1X_Devices_ph3._CB418076693_.jpg" />
        </div>
        <div className="home_row">
          <Product
            id="901435837"
            title="Decals Design StickersKart Wall Stickers Tree with Birds and Cages (Brown)"
            img="https://m.media-amazon.com/images/I/512Mez3HNAL.__AC_SY200_.jpg"
            price={1120.49}
            rating={5}
          />
          <Product
            id="9082463457"
            title="Decals Design StickersKart Wall Stickers Tree with Birds and Cages (Brown)"
            img="https://m.media-amazon.com/images/I/512Mez3HNAL.__AC_SY200_.jpg"
            price={694.99}
            rating={3}
          />
          <Product
            id="908246667"
            title="Decals Design StickersKart Wall Stickers Tree with Birds and Cages (Brown)"
            img="https://m.media-amazon.com/images/I/512Mez3HNAL.__AC_SY200_.jpg"
            price={419.99}
            rating={2}
          />
          <Product
            id="908246667"
            title="Decals Design StickersKart Wall Stickers Tree with Birds and Cages (Brown)"
            img="https://m.media-amazon.com/images/I/512Mez3HNAL.__AC_SY200_.jpg"
            price={419.99}
            rating={2}
          />
          <Product
            id="908246667"
            title="Decals Design StickersKart Wall Stickers Tree with Birds and Cages (Brown)"
            img="https://m.media-amazon.com/images/I/512Mez3HNAL.__AC_SY200_.jpg"
            price={419.99}
            rating={2}
          />
          <Product
            id="908246667"
            title="Decals Design StickersKart Wall Stickers Tree with Birds and Cages (Brown)"
            img="https://m.media-amazon.com/images/I/512Mez3HNAL.__AC_SY200_.jpg"
            price={419.99}
            rating={2}
          />
        </div>
        <div className="home_row">
          <Product
            id="908246837"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={109904.98}
            rating={4}
            img="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
