var React = require('react');

// props = {temp, location}

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's it {temp} in {location}.</h3>
  )
};

module.exports = WeatherMessage;