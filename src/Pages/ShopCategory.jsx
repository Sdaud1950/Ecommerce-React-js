import React, { useContext } from "react";

import "./CSS/ShopCatergory.css";
import { ShopContext } from "../Context/ShopContext";
import dorp_downicon from "../Component/Assest/dropdown_icon.png";
import Item from "../Component/Item/Item";


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="ShopCategory">
      <img className="ShopCategory-banner" src={props.banner} alt="" />
      <div className="shoptcat-indexshort">
        <p>
          <span>Shoing 1 to 12</span> out of 36 product
        </p>
        <div className="shopcat-sort">
          {" "}
          Sort by
          <img src={dorp_downicon} alt="" />
        </div>
      </div>
      <div className="shopcat_produt">

        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                name={item.name}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="Explore"> Explore More</div>
    </div>
  );
};

export default ShopCategory;
