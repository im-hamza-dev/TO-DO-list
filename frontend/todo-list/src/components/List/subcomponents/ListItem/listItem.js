import React from "react";
import "./listItem.scss";

const ListItem = ({ name, desc }) => {
  return (
    <li className="product-item">
      <p>Pending</p>
      <h2>{name}</h2>
      <p>{desc}</p>
    </li>
  );
};

export default ListItem;
