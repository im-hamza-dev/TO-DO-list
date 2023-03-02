const express = require("express");
const HttpError = require("../models/http-error");
const router = express.Router();
const uuid = require("uuid/v4");

const todoItemsBucket = []; // not a database, just some in-memory storage for now

router.get("/todoItems", (req, res, next) => {
  res.status(200).json({ todoItems: todoItemsBucket });
});

router.post("/todoItem", (req, res, next) => {
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
});

module.exports = router;
