const express = require('express');
const router = express.Router();

// Bring in Models
const Todo = require('../models/todo');

// read all tasks api
router.get('/todos', (req, res, next) => {
  Todo.find()
    .exec()
    .then(todo => {
      res.json(todo);
    })
    .catch(err => next(err));
});

router.post('/todo/add', (req, res, next) => {
  const todo = new Todo({
    name: req.body.name,
    isCompleted: req.body.isCompleted,
  });
  todo
    .save()
    .then(() => res.json(todo))
    .catch(err => next(err));
});

router.put('/todo/complete/:id', (req, res, next) => {
  const query = { _id: req.params.id };
  const todo = {
    isCompleted: req.body.isCompleted,
  };

  Todo.updateOne(query, todo)
    .exec()
    .then(newTodo => res.json(newTodo))
    .catch(err => next(err));
});

router.delete('/todo/delete/:id', (req, res, next) => {
  Todo.deleteOne({ _id: req.params.id })
    .exec()
    .then(todo => res.json(todo))
    .catch(err => next(err));
});

module.exports = router;
