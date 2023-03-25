const mongoose = require("mongoose");

const todoItemsSchema = new mongoose.Schema({
  title: { type: string, required: true },
  description: { type: string, required: true },
  status: { type: string },
  deadline: { type: string },
});

module.exports = mongoose.model("TodoItem", todoItemsSchema);

// create TYPE SCHEMA of collection documents acting here as MODEL
// in controllers file, we will create instances of above MODEL to add in Collections
