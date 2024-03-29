import React, { useState, useEffect } from "react";
import { NewTodoForm, List } from "../../components";
import "./notes.scss";

function Notes() {
  const [todoItems, setTodoItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/notes");

      const responseData = await response.json();

      setTodoItems(responseData.todoItems);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  const addTodoHandler = async (
    todoName,
    description,
    color,
    deadline,
    status,
    tags
  ) => {
    try {
      const newTodo = {
        title: todoName,
        desc: description, // "+" to convert string to number
        color,
        deadline,
        status,
        tags,
      };
      let hasError = false;
      const response = await fetch("http://localhost:5000/api/notes", {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (![200, 201, undefined].includes(response.code)) {
        hasError = true;
      }

      const responseData = await response.json();
      if (hasError) {
        throw new Error(responseData.message);
      }

      setTodoItems((todos) => {
        return todos.concat({
          ...newTodo,
          id: responseData.todoItem.id,
        });
      });
    } catch (error) {
      alert(error.message || "Something went wrong!");
    }
  };
  isLoading && <p className="loader">Loading...</p>;
  return (
    <React.Fragment>
      <main className="main-wrapper">
        <List items={todoItems} />
        {/* <Button onClick={() => setOpenForm(true)}>Add Notes</Button> */}
        <NewTodoForm
          openForm={openForm}
          onAddTodo={addTodoHandler}
          setOpenForm={setOpenForm}
        />
      </main>
    </React.Fragment>
  );
}

export default Notes;
