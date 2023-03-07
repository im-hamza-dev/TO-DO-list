import React, { useState } from "react";
import Input from "../Input/input";
import Button from "../Button/button";
import "./newTodoForm.scss";

const NewTodoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const submitProductHandler = (event) => {
    event.preventDefault();
    props.onAddTodo(enteredTitle, description);
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
          type="textarea"
          label="Description"
          id="desc"
          value={description}
          onChange={descChangeHandler}
        />
        <Button type="submit">Add Todo </Button>
      </form>
    </section>
  );
};

export default NewTodoForm;
