import React from "react";
import "./listItem.scss";

const ListItem = ({ name, desc }) => {
  return (
    <li className="product-item">
      <h2>{name}</h2>
      <p>Description: {desc}</p>
    </li>
  );
};

export default ListItem;
