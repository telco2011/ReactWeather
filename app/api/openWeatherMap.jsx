var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3074873abce818a35321aa24d89b6979&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
    function capitalizeSentence (text) {
      return text.replace(/\b\w/g, l => l.toUpperCase());
    }

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        //debugger;
        throw new Error(capitalizeSentence(res.response.data.message));
      } else {
        //debugger;
        return res.data.main.temp;
      }
    }, function (err) {
      //debugger;
      throw new Error(capitalizeSentence(err.response.data.message));
    });
  }
}