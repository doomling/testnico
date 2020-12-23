const mongoose = require("mongoose");

const hobbySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Hobby", hobbySchema);
