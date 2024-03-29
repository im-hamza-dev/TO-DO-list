// imort routes-model and error-model
const notesroutes = require("./routes/notes-routes");
const authroutes = require("./routes/user-routes");
const HttpError = require("./models/http-error");

const { check } = require("express-validator");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// body-parser used for POST request to use json data
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

app.use(
  "/api/notes",
  [
    check("title").not().isEmpty(),
    check("desc").not().isEmpty(),
    check("title").isLength({ min: 5 }),
    check("desc").isLength({ min: 5 }),
    check("status").not().isEmpty(),
  ],
  notesroutes
);

app.use("/api/users", authroutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

//error-model middleware
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown error occured!" });
});

app.listen(5000); // start Node + Express server on port 5000
