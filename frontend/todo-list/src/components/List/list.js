import React from "react";
import ListItem from "./subcomponents/ListItem/listItem";
import "./list.scss";

const List = (props) => {
  let content;
  if (!props.items || props.items.length === 0) {
    content = <p>Could not find any item. Maybe create one?</p>;
  } else {
    content = (
      <>
        {props.items.map((p) => (
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
      <div className="items-col">
        <h5 className="columns-heading">In Progress</h5>

        {content}
      </div>
      <div className="items-col">
        <h5 className="columns-heading">Completed</h5>
        {content}
      </div>
    </section>
  );
};

export default List;
