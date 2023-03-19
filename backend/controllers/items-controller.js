const uuid = require("uuid/v4");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const todoItemsBucket = [
  {
    title: "Docker Kubernetes",
    desc: "Details: Take basic understanding of docker to implement beginner level use-cases",
  },
]; // not a database, just some in-memory storage for now

const getTodoItems = (req, res, next) => {
  if (!todoItemsBucket) {
    throw new HttpError("No To-do Items found", 404);
  }
  res.status(200).json({ todoItems: todoItemsBucket });
};

const createTodoItems = (req, res, next) => {
  const { title, desc } = req.body;

  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid input, please enter a valid title and desc.", 404)
    );
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
};

exports.getTodoItems = getTodoItems;
exports.createTodoItems = createTodoItems;
