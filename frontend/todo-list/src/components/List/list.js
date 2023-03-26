import React from "react";
import ListItem from "./subcomponents/ListItem/listItem";
import "./list.scss";

const List = (props) => {
  let content;
  if (!props.items || props.items.length === 0) {
    content = <p>Could not find any item. Maybe create one?</p>;
  } else {
    content = (
      <ul className="item-list">
        {props.items.map((p) => (
          <ListItem key={p.id} name={p.title} desc={p.desc} />
        ))}
      </ul>
    );
  }

  return <section id="items">{content}</section>;
};

export default List;
