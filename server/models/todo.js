const Mongoose = require('mongoose');

const { Schema } = Mongoose;

// Todo Schema
const TodoSchema = new Schema({
  name: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
  },
});

module.exports = Mongoose.model('Todo', TodoSchema);
