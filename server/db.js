const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'luna.db'));

const initQueries = `
CREATE TABLE IF NOT EXISTS courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT
);
`;

db.exec(initQueries, err => {
  if (err) {
    console.error('Failed to initialize database:', err);
    return;
  }
  db.get('SELECT COUNT(*) as count FROM courses', (err, row) => {
    if (!err && row.count === 0) {
      db.run('INSERT INTO courses (title, description) VALUES (?, ?)', [
        'Welcome to LUNA',
        'This sample course is a placeholder.'
      ]);
    }
  });
});

module.exports = db;
