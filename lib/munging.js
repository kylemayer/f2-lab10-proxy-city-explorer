function mungeLocationRes(locationRes) {

  const location = locationRes[0];

  return {
    formatted_query: location.display_name,
    latitude: location.lat,
    longitude: location.lon
  };
}

function mungeWeatherRes() {





}


function mungeEventRes() {





}


module.exports = {
  mungeLocationRes,
  mungeWeatherRes,
  mungeEventRes,
};