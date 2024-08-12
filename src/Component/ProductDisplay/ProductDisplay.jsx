import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assest/star_icon.png";
import start_dull_icon from "../Assest/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
const {AddtoCart}= useContext(ShopContext)

  return (
    <div className="ProductDisplay">
      <div className="product-left">
        <div className="productdisplya-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product_right">
        <h1>{product.name}</h1>
        <div className="productdisplayright-start">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="old-price">${product.old_price}</div>
            <div className="new-price">${product.new_price}</div>
        </div>
        <div className="productright-dis">
            A lightweight, usually knitted,pullover shirt, close-fitting abd with
            round neckline and short sleeves.
        </div>
        <div className="productdisply-right-size">
            <h1>Select size</h1>
        </div>
        <div className="productdisply-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>

        </div>
        <button onClick={()=>{AddtoCart(product.id)}}>ADD TO CART</button>
        <p className="Product-displyrightcat"> <span>Category:</span>Women, T-Shirt, Crop Top</p>
        <p className="Product-displyrightcat"> <span>Tag:</span>Modern, Latest</p>
      </div>

    </div>
  );
};

export default ProductDisplay;
