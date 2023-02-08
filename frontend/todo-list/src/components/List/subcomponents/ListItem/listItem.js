import React from "react";
import "./listItem.scss";

const ListItem = (props) => {
  return (
    <li className="product-item">
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
    </li>
  );
};

export default ListItem;
