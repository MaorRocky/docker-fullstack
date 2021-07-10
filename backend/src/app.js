const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get('/test', (req, res) => {
  res.send('Hello from express');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
