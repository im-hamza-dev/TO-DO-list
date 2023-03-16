const uuid = require("uuid/v4");
const HttpError = require("../models/http-error");

const todoItemsBucket = [
  {
    title: "Docker Kubernetes",
    desc: "Details: Take basic understanding of docker to implement beginner level use-cases",
  },
]; // not a database, just some in-memory storage for now

const getItems = (req, res, next) => {
  if (!todoItemsBucket) {
    throw new HttpError("No To-do Items found", 404);
  }
  res.status(200).json({ todoItems: todoItemsBucket });
};

const createItems = (req, res, next) => {
  const { title, desc } = req.body;

  if (
    !title ||
    title.trim().length === 0 ||
    !desc ||
    desc.trim().length === 0
  ) {
    next(
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

exports.getItems = getItems;
exports.createItems = createItems;
