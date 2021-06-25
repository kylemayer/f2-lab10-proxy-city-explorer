require('dotenv').config();
const { mungeLocationRes, mungeWeatherRes, mungeReviewRes } = require('../lib/mungeUtils.js');

const locationData = require('../data/locationData.json');
const weatherData = require('../data/weatherData.json');
const reviewsData = require('../data/reviewsData.json');
// const formReviewsData = require('../data/formattedReviewData.json');

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

      const expectation =   [
        {
          image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/5lWNz5gC1jNp1zFxDXUfkg/o.jpg',
          name: 'Mother’s Bistro & Bar',
          price: '$$',
          rating: 4.5,
          url: 'https://www.yelp.com/biz/mother-s-bistro-and-bar-portland?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/Ij9yv97Ch6NwKhNdpezRhw/o.jpg',
          'name': 'Andina Restaurant',
          'price': '$$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/andina-restaurant-portland?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/1sE02Y1glmOvdRA54VIlYA/o.jpg',
          'name': 'Lechon',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/lechon-portland?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/azr6sD6VeJbdaiO2aKvSsw/o.jpg',
          'name': 'Luc Lac',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/luc-lac-portland-7?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/a-Av4dG6Xv3f1_XysFj4ow/o.jpg',
          'name': 'Deschutes Brewery Portland Public House',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/deschutes-brewery-portland-public-house-portland?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/-N8P6cTACCKnSuJaqeCyXg/o.jpg',
          'name': 'Portland City Grill',
          'price': '$$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/portland-city-grill-portland-7?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/e4qKpwprT3RIAonsescOAQ/o.jpg',
          'name': 'Cheryl’s on 12th',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/cheryl-s-on-12th-portland?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/lqmMYlLRV-aoH73koWA6Ew/o.jpg',
          'name': 'Screen Door - Eastside',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/screen-door-eastside-portland?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/jAH0XyZe5N8YTrOy71SuJg/o.jpg',
          'name': 'Q Restaurant & Bar',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/q-restaurant-and-bar-portland?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/jtp9n8HTjid4lEeXlcKKiA/o.jpg',
          'name': 'Nong\'s Khao Man Gai',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/nongs-khao-man-gai-portland-2?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/zloG1rU5-15Q4MVmf8inbA/o.jpg',
          'name': 'Grassa',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/grassa-portland?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Zetji_yDJJDG8eksunYiTg/o.jpg',
          'name': 'Cuon - Vietnamese Street Food',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/cuon-vietnamese-street-food-portland-3?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/r6y-0Q2z3cnx1bQKxn-iHw/o.jpg',
          'name': 'Salt & Straw',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/salt-and-straw-portland-2?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/ZRKWUoGRDo1FryxlHfooRw/o.jpg',
          'name': 'Stumptown Coffee Roasters',
          'price': '$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/stumptown-coffee-roasters-portland?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/oU5nd95LfA3okpd9J_uPWg/o.jpg',
          'name': 'Ground Kontrol Classic Arcade',
          'price': '$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/ground-kontrol-classic-arcade-portland-2?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/ARlFgwCNq62izXYf1TUQiA/o.jpg',
          'name': 'Le Pigeon',
          'price': '$$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/le-pigeon-portland-2?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/w8w2mkIrowArbwpzIInq9g/o.jpg',
          'name': 'Olympia Provisions',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/olympia-provisions-portland-2?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/b0E-cDYYiWuvBxFH-YPONA/o.jpg',
          'name': 'Lardo',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/lardo-portland-4?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/AwxZ3eb04OiVH-92xKf_jg/o.jpg',
          'name': 'Mediterranean Exploration Company',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/mediterranean-exploration-company-portland-2?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
        {
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/gY4shaDsFS6IfRH2fyMTnw/o.jpg',
          'name': 'Lan Su Chinese Garden',
          'price': undefined,
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/lan-su-chinese-garden-portland?adjust_creative=Yol9Zw3o5Qs4oBzynNfDNg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Yol9Zw3o5Qs4oBzynNfDNg',
        },
      ];

      const data = mungeReviewRes(reviews);

      expect(data).toEqual(expectation);
    });

  });
});

