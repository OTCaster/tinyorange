const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// basic API endpoints
app.get('/api/courses', (req, res) => {
  db.all('SELECT id, title, description FROM courses', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`LUNA server running on port ${PORT}`);
});
