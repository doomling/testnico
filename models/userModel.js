const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
