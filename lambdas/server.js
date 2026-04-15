
const express = require('express');
const app = express();

app.use(express.json());

// Simulated Lambda: Get Movies
app.get('/movies', (req, res) => {
  res.json({
    movies: ["Inception", "Avengers", "Interstellar"]
  });
});

// Simulated Lambda: Add Movie
app.post('/movies', (req, res) => {
  const movie = req.body;
  res.json({
    message: "Movie added",
    movie
  });
});

// Simulated Lambda: Watch Movie (event-driven)
app.post('/watch', (req, res) => {
  res.json({
    message: "Watch event sent to queue (simulated SQS)"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});