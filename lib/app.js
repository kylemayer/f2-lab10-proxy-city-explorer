const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const request = require('superagent');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


app.get('/location', async(req, res) => {
  try {
    const data = await client.query('SELECT * from animals');

    res.json(data.rows);
  } catch(e) {

    res.status(500).json({ error: e.message });
  }
});

app.get('/weather', async(req, res) => {
  try {
    const data = await client.query('SELECT * from animals');

    res.json(data.rows);
  } catch(e) {

    res.status(500).json({ error: e.message });
  }
});

app.get('/events', async(req, res) => {
  try {
    const data = await client.query('SELECT * from animals');

    res.json(data.rows);
  } catch(e) {

    res.status(500).json({ error: e.message });
  }
});


module.exports = app;
