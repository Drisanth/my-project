const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World from Node.js!');
  res.send('Github Actions');
});

app.get('/about', (req, res) => {
  res.send('This is a sample Node.js project.');
});

app.post('/echo', (req, res) => {
  res.json({
    youSent: req.body
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
