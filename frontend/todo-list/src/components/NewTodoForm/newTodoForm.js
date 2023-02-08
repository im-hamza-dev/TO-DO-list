import React, { useState } from "react";
import Input from "../Input/input";
import Button from "../Button/button";
import "./newTodoForm.scss";

const NewTodoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const submitProductHandler = (event) => {
    event.preventDefault();
    props.onAddTodo(enteredTitle, enteredPrice);
  };

  return (
    <section id="new-li">
      <h2>Add a New Todo Item</h2>
      <form onSubmit={submitProductHandler}>
        <Input
          type="text"
          label="Title"
          id="title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <Input
          type="number"
          label="Price"
          step={0.01}
          id="price"
          value={enteredPrice}
          onChange={priceChangeHandler}
        />
        <Button type="submit">Add Task</Button>
      </form>
    </section>
  );
};

export default NewTodoForm;
