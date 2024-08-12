import React from "react";
import "./NewCollection.css";
import new_collections from "../Assest/new_collections";
import Item from "../Item/Item";
const NewCollection = () => {
  return (
    <div className="New_collection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collection">
        {new_collections.map((item, index) => {
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

export default NewCollection;
