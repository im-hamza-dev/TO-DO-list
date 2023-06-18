import React from "react";
import ListItem from "./subcomponents/ListItem/listItem";
import "./list.scss";

const List = ({ items }) => {
  let content;
  if (!items || items.length === 0) {
    content = <p>Notes not found. Create one?</p>;
  } else {
    content = (
      <>
        {items.map((p) => (
          <ListItem key={p.id} name={p.title} desc={p.desc} />
        ))}
      </>
    );
  }

  return (
    <section className="items">
      <div className="items-col">
        <h5 className="columns-heading">Todo</h5>
        {content}
      </div>
    </section>
  );
};

export default List;
