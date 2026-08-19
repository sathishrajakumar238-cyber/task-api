const express = require('express');
const app = express();
app.use(express.json());
let tasks = [];

app.get('/health', (req, res) => res.status(200).send('OK'));
app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => {
  const task = { id: Date.now(), ...req.body };
  tasks.push(task);
  res.status(201).json(task);
});

module.exports = app;