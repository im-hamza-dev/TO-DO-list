const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://hamzadev:aYm6UokQghIaSktB@cluster0.4mfsatg.mongodb.net/?retryWrites=true&w=majority";

// Connecting MongoDB database
mongoose
  .connect(uri)
  .then(() => console.log("Connecting MongoDB"))
  .catch((err) => console.log("Unable to Connect", err));

const getUsers = async (req, res, next) => {};

const createUsers = async (req, res, next) => {};

exports.getUsers = getUsers;
exports.createUsers = createUsers;
