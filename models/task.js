const Mongoose = require('mongoose');

const { Schema } = Mongoose;

// Task Schema
const TaskSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
  },
});

module.exports = Mongoose.model('Task', TaskSchema);
