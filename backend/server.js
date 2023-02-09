const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

const app = express();

const todoItemsBucket = []; // not a database, just some in-memory storage for now

app.use(bodyParser.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/todoItems", (req, res, next) => {
  res.status(200).json({ todoItems: todoItemsBucket });
});

app.post("/todoItem", (req, res, next) => {
  const { title, desc } = req.body;

  if (
    !title ||
    title.trim().length === 0 ||
    !desc ||
    desc.trim().length === 0
  ) {
    return res.status(422).json({
      message: "Invalid input, please enter a valid title and desc.",
    });
  }

  const createdItem = {
    id: uuid(),
    title,
    desc,
  };

  todoItemsBucket.push(createdItem);

  res
    .status(201)
    .json({ message: "New todo item created.", todoItem: createdItem });
});

app.listen(5000); // start Node + Express server on port 5000
