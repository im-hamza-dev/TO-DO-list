const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://hamzadev:aYm6UokQghIaSktB@cluster0.4mfsatg.mongodb.net/?retryWrites=true&w=majority";

const Notes = require("../models/notes");

// Connecting MongoDB database
mongoose
  .connect(uri)
  .then(() => console.log("Connecting MongoDB"))
  .catch((err) => console.log("Unable to Connect", err));

const getNotes = async (req, res, next) => {
  // Connecting MongoDB database
  let notesList = await Notes.find().exec();
  if (!notesList) {
    return next(new HttpError("No To-do Items found", 404));
  }

  res.status(200).json({
    todoItems: notesList.map((obj) => obj.toObject({ getters: true })),
  });
};

const createNotes = async (req, res, next) => {
  const { title, desc, color, deadline, status, tags } = req.body;

  // Validate Actions
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid input, please enter a valid title and desc.", 403)
    );
  }

  const createdItem = new Notes({
    title,
    desc,
    color,
    deadline,
    status,
    tags,
  });
  console.log(createdItem);
  let result = await createdItem.save();
  res.status(201).json({
    message: "New Notes created.",
    todoItem: result,
  });
};

const updateNotesById = async (req, res, next) => {
  // Validate Actions
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid input, please enter a valid title and desc.", 403)
    );
  }
  const { title, desc, color, deadline, status, tags } = req.body;
  const { nid } = req.params;
  try {
    const updatedNotes = await TodoItem.findById(nid);
  } catch (err) {
    let error = new HttpError("Unable to update notes!", 403);
    return next(error);
  }
  updatedNotes.title = title;
  updatedNotes.desc = desc;
  updatedNotes.color = color;
  updatedNotes.deadline = deadline;
  updatedNotes.status = status;
  updatedNotes.tags = tags;
  try {
    await updatedNotes.save();
  } catch (err) {
    let error = new HttpError("Unable to update notes!", 403);
    return next(error);
  }
  res.status(200).json({
    message: "New Notes created.",
    todoItem: result.toObject({ getters: true }),
  });
};
const delNotes = async (req, res, next) => {
  const { nid } = req.params;
  let notesItem;
  try {
    notesItem = await Notes.findById(nid);
  } catch (err) {
    let error = new HttpError("Unable to find this notes!", 403);
    return next(error);
  }

  try {
    await notesItem.remove();
  } catch (err) {
    let error = new HttpError("Unable to Delete notes!", 403);
    return next(error);
  }
};

exports.getNotes = getNotes;
exports.createNotes = createNotes;
exports.updateNotesById = updateNotesById;
exports.delNotes = delNotes;
