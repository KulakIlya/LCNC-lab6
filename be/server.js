const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Temporary in-memory data store
let todos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build TODO app', completed: false },
];

// GET all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// ADD new todo
app.post('/api/todos', (req, res) => {
  const { text } = req.body;

  if (!text) return res.status(400).json({ error: 'Text is required' });

  const newTodo = {
    id: Date.now(),
    text,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// UPDATE a todo (toggle completed or edit text)
app.put('/api/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const { text, completed } = req.body;

  const todo = todos.find((t) => t.id === id);
  if (!todo) return res.status(404).json({ error: 'Todo not found' });

  if (text !== undefined) todo.text = text;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// DELETE a todo
app.delete('/api/todos/:id', (req, res) => {
  const id = Number(req.params.id);

  todos = todos.filter((t) => t.id !== id);
  res.status(204).end();
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
