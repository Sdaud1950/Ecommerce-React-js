import React from "react";
import "./RelatesProduct.css";
import data_product from "../Assest/data";
import Item from "../Item/Item";

const RelatedProduct = () => {

    // const product = data_product.filter(
    //     (item) => item.category === category
    //   );
    
  return (
    <div className="RelatedProduct">
      <h1>Related Products</h1>
      <hr />
      <div className="realtedproduct-item">
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

export default RelatedProduct;
