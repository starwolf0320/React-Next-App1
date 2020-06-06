const Mongoose = require('mongoose');

const { Schema } = Mongoose;

// Todo Schema
const TodoSchema = new Schema({
  name: {
    type: String,
  },
  is_completed: {
    type: Boolean,
  },
});

module.exports = Mongoose.model('Todo', TodoSchema);
