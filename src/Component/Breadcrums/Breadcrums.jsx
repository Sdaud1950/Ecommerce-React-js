import React from "react";
import "./Breadcrums.css";
import Arrow_icon from "../Assest/breadcrum_arrow.png";

const Breadcrums = ({product}) => {
  // const { product } = props;
  console.log('product:', product); // Add this line to debug

  return (
    <div className="Breadcrums">
      Home <img src={Arrow_icon} alt="" /> Shop <img src={Arrow_icon} alt="" />{" "}
      {product.category} <img src={Arrow_icon} alt="" /> {product.name}
      
    </div>
  );
};

export default Breadcrums;
