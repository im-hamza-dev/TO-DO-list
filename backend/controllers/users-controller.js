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

const login = async (req, res, next) => {
  // Find user in User Schema by email
  // validate user password
  // send LOGGED IN response
};

const createUsers = async (req, res, next) => {
  // validation actions
  // duplicate check on email using findOne({email: req.body.email})
  // create user from schema
  // save it
};

exports.login = login;
exports.createUsers = createUsers;
