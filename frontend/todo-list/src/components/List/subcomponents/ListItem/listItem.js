import React from "react";
import "./listItem.scss";

const ListItem = ({ name, desc }) => {
  return (
    <div className="list-item">
      <div className="header-row"></div>
      <div className="content">
        <span className="status">Pending</span>
        <h2 className="heading">{name}</h2>
        <p className="desc">{desc}</p>
        <div className="tags">
          <span>Project</span>
          <span>MERN</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
