import React, { useState, useEffect } from "react";

import { Header, NewTodoForm, List } from "../../components";
import "./todolist.scss";

function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

      if (![200, 201].includes(response.code)) {
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

  return (
    <React.Fragment>
      <Header />
      <main className="main-wrapper">
        {!isLoading && <List items={todoItems} />}
        {isLoading && <p className="loader">Loading...</p>}
        <NewTodoForm onAddTodo={addTodoHandler} />
      </main>
    </React.Fragment>
  );
}

export default TodoList;
