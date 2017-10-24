const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/39e2d666673cdc408034539f714f83b1/${lat}, ${lng}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to the Forecast.io server');
        } else if(response.statusCode === 404){
            callback('Unable to fetch the weather');
        } else if(response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;




