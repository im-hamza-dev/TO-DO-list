import React, { useState, useEffect } from "react";
import Button from "../../components/Button/button";
import { Header, NewTodoForm, List } from "../../components";
import "./todolist.scss";

function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/todoItems");

      const responseData = await response.json();

      setTodoItems(responseData.todoItems);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  const addTodoHandler = async (todoName, description) => {
    try {
      const newTodo = {
        title: todoName,
        desc: description, // "+" to convert string to number
      };
      let hasError = false;
      const response = await fetch("http://localhost:5000/api/todoItem", {
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
      console.log(responseData);
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

export default TodoList;
