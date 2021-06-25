require('dotenv').config();
const { mungeLocationRes, mungeWeatherRes, mungeReviewRes } = require('../lib/mungeUtils.js');

const locationData = require('../data/locationData.json');
const weatherData = require('../data/weatherData.json');
const reviewsData = require('../data/reviewsData.json');

describe('app routes', () => {
  describe('routes', () => {

    test('returns munged location data', () => {

      const location = locationData;

      const expectation =   {
        formatted_query: 'Portland, Multnomah County, Oregon, USA',
        latitude: '45.5202471',
        longitude: '-122.6741949'
      };

      const data = mungeLocationRes(location);

      expect(data).toEqual(expectation);
    });

    test('returns munged weather data', () => {

      const weather = weatherData;

      const expectation = [
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) }
      ];

      const data = mungeWeatherRes(weather);

      expect(data).toEqual(expectation);
    });

    test('returns munged yelp reviews data', () => {

      const reviews = reviewsData;

      const expectation =   [];

      const data = mungeReviewRes(reviews);

      expect(data).toEqual(expectation);
    });

  });
});

