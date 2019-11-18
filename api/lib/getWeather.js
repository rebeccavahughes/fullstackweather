const request = require('request');
const {promisify} = require('util');
require('dotenv').config();

const promisifiedRequest = promisify(request);

const getWeather = async (city) => {
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/find?q=${city},uk&APPID=${process.env.APPID}`,
        json: true
    });

    return data.body;
}

module.exports = getWeather