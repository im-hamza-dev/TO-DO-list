const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String },
  deadline: { type: Date },
  color: { type: String },
  tags: { type: String },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

module.exports = mongoose.model("Notes", notesSchema);

// create TYPE SCHEMA of collection documents acting here as MODEL
// in controllers file, we will create instances of above MODEL to add in Collections
