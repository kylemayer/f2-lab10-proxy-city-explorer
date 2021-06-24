const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const request = require('superagent');
const { mungeLocationRes } = require('./munging.js');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


app.get('/location', async(req, res) => {
  try {
    const city = req.query.search;

    const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${city}&format=json`);

    const wrangledData = mungeLocationRes(data.body);

    res.json(wrangledData);
  } catch(e) {

    res.status(500).json({ error: e.message });
  }
});

app.get('/weather', async(req, res) => {
  try {
    const data = await

    res.json(data.rows);
  } catch(e) {

    res.status(500).json({ error: e.message });
  }
});

app.get('/events', async(req, res) => {
  try {
    const data = await

    res.json(data.rows);
  } catch(e) {

    res.status(500).json({ error: e.message });
  }
});


module.exports = app;
