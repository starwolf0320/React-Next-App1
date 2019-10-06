const express = require('express');
const router = express.Router();

// Bring in Models
const Task = require('../models/task');

// read all tasks api
router.get('/todos', (req, res, next) => {
  Task.find()
    .exec()
    .then(task => {
      res.json(task);
    })
    .catch(err => next(err));
});

module.exports = router;
