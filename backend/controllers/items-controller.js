const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://hamzadev:aYm6UokQghIaSktB@cluster0.4mfsatg.mongodb.net/?retryWrites=true&w=majority";

const TodoItem = require("../models/todo-items");

// Connecting MongoDB database
mongoose
  .connect(uri)
  .then(() => console.log("Connecting MongoDB"))
  .catch((err) => console.log("Unable to Connect", err));

const getTodoItems = async (req, res, next) => {
  // Connecting MongoDB database
  let itemsList = await TodoItem.find().exec();
  if (!itemsList) {
    return next(new HttpError("No To-do Items found", 404));
  }

  res.status(200).json({ todoItems: itemsList });
};

const createTodoItems = async (req, res, next) => {
  const { title, desc } = req.body;

  // Validate Actions
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid input, please enter a valid title and desc.", 403)
    );
  }

  const createdItem = new TodoItem({
    title,
    desc,
  });
  console.log(createdItem);
  let result = await createdItem.save();
  res.status(201).json({
    message: "New todo item created.",
    todoItem: result,
  });
};

exports.getTodoItems = getTodoItems;
exports.createTodoItems = createTodoItems;
