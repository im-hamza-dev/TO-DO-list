import React from "react";
import ProductItem from "./subcomponents/ListItem/listItem";
import "./list.scss";

const List = (props) => {
  let content;
  if (!props.items || props.items.length === 0) {
    content = <p>Could not find any products. Maybe create one?</p>;
  } else {
    content = (
      <ul className="product-list">
        {props.items.map((p) => (
          <ProductItem key={p.id} name={p.title} desc={p.desc} />
        ))}
      </ul>
    );
  }

  return <section id="products">{content}</section>;
};

export default List;
