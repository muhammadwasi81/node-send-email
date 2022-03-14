const express = require('express');
const dotenv = require('dotenv');
const mg = require('mailgun.js');

const app = express();

dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 5000;

app.listen(() => {
  console.log(`server at http://localhost:${PORT} successfully started`);
});
