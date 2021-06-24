function mungeLocationRes(locationRes) {

  const location = locationRes[0];

  return {
    formatted_query: location.display_name,
    latitude: location.lat,
    longitude: location.lon
  };
}

function mungeWeatherRes(weatherRes) {
  const forecasts = weatherRes.data;

  const wrangledForecasts = forecasts.map(forecast => {
    return {
      forecast: forecast.weather.description,
      time: new Date(forecast.ts * 1000)
        .toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
    };
  });
  return wrangledForecasts;
}


function mungeEventRes(eventRes) {
  const events = eventRes.data.events;

  const wrangledEvents = events.map(event => {
    return {
      name: event.name,
      image_url: event.image_url,
      price: event.price,
      rating: event.rating,
      url: event.url,
    };
  });
  return wrangledEvents;
}

module.exports = {
  mungeLocationRes,
  mungeWeatherRes,
  mungeEventRes,
};