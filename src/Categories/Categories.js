import React from "react";
import "./Categories.css";

function Categories({ img }) {
  return (
    <div className="category">
      <img src={img} alt="" />
    </div>
  );
}

export default Categories;
