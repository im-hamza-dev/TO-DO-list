const uuid = require("uuid/v4");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://hamzadev:aYm6UokQghIaSktB@cluster0.4mfsatg.mongodb.net/?retryWrites=true&w=majority";

const getTodoItems = async (req, res, next) => {
  // Connecting MongoDB database
  const client = new MongoClient(uri);
  let itemsList;
  try {
    await client.connect();
    const db = client.db("Cluster0");

    itemsList = await db.collection("todos").find().toArray();
  } catch (error) {
    // throw new HttpError("Could not retrieve data", 404);
    return next(new HttpError("Could not retrieve data", 404));
  }
  client.close();

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

  const createdItem = {
    id: uuid(),
    title,
    desc,
  };
  console.log(createdItem);

  // Connecting MongoDB database
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("Cluster0");
    const itemsList = await db.collection("todos").insertOne(createdItem);
  } catch (error) {
    return next(new HttpError("Could not store data"));
  }
  client.close();
  res
    .status(201)
    .json({ message: "New todo item created.", todoItem: createdItem });
};

exports.getTodoItems = getTodoItems;
exports.createTodoItems = createTodoItems;
