import React from "react";
import "./Popular.css";


import data_product from "../Assest/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="Popular">
      <h1>POPULAR IN WOMEM</h1>
      <hr />
      <div className="popular_item">
        {data_product.map((item, index) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
