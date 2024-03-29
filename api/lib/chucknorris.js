const request = require('request');
const {promisify} = require('util');
require('dotenv').config();

const promisifiedRequest = promisify(request);

const chucknorris = async () => {
    let data = await promisifiedRequest({
        url: 'https://api.chucknorris.io/jokes/random',
        json: true
     
    });
    console.log(data.body)
    return data.body;
}

module.exports = chucknorris;