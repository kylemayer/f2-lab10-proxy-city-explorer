const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const request = require('superagent');
const { mungeLocationRes, mungeWeatherRes, mungeReviewRes } = require('./mungeUtils.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


app.get('/location', async(req, res) => {
  try {
    const city = req.query.search;

    const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${city}&format=json`);

    const wrangledLocation = mungeLocationRes(data.body);

    res.json(wrangledLocation);
  } catch(e) {

    res.status(500).json({ error: e.message });
  }
});

app.get('/weather', async(req, res) => {
  try {
    const data = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_KEY}`);

    const wrangledWeather = mungeWeatherRes(data.body);
    res.json(wrangledWeather);
  } catch(e) {

    res.status(500).json({ error: e.message });
  }
});

app.get('/reviews', async(req, res) => {
  try {
    const data = await request.get(`https://api.yelp.com/v3/businesses/search?latitude=${req.query.latitude}&longitude=${req.query.longitude}`)
      .set('Authorization', `Bearer ${process.env.EVENT_KEY}`);

    const wrangledReviews = mungeReviewRes(data.body.businesses);
    res.json(wrangledReviews);
  } catch(e) {

    res.status(500).json({ error: e.message });
  }
});


module.exports = app;
