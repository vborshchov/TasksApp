const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  description: { type: String, required: false, max: 1000 }
});

// Export the model
module.exports = mongoose.model("Task", TaskSchema);
