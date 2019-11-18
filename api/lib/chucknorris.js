const request = require('request');
const {promisify} = require('util');
require('dotenv').config();

const promisifiedRequest = promisify(request);

const chuckNorris = async () => {
    let data = await promisifiedRequest({
        url: 'https://api.chucknorris.io/jokes/random',
        json: false
     
    });

    return data.body;
}

module.exports = chuckNorris;