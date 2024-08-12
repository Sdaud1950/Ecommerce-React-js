import React from "react";
import "./Item.css";
import {  useNavigate } from "react-router-dom";

const Item = (props) => {
  const Navigate= useNavigate()

  const handclik=()=>{
    Navigate (`/product/${props.id}`);
    window.scrollTo(0, 0);

  }
  return (
    <div className="Items">
    {/* <NavLink to={`/product/${props.id}`}> <img onClick= { window.scrollTo(0,0)}src={props.image} alt="img"></img></NavLink> */}
    <img onClick={handclik} src={props.image} alt="img" />
      
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
