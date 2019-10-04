const express = require('express');
const router = express.Router();

const todos = [
  { id: 1, name: 'todo1' },
  { id: 2, name: 'todo2' },
  { id: 3, name: 'todo3' },
];

// get api
router.get('/todo', (req, res) => {
  res.json(todos);
});

module.exports = router;
