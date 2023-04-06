const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  image: { type: String, required: true },
  notes: [{ type: mongoose.Types.ObjectId, required: true, ref: "TodoItem" }],
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);

// create TYPE SCHEMA of collection documents acting here as MODEL
// in controllers file, we will create instances of above MODEL to add in Collections
