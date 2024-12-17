// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'rodriguezalfredo',  // replace with your DB username
  password: 'ArenaFresh89',  // replace with your DB password
  database: 'arenadb',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Endpoint to handle POST request and insert data into MySQL
app.post('/', (req, res) => {
  const { email } = req.body; // assuming you're sending an email

  const query = "INSERT INTO newsletter_emails (email) VALUES (?)";
  db.query(query, [email], (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Error inserting data ' + email});
    } else {
      res.status(200).send({ message: 'Data inserted successfully' });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});