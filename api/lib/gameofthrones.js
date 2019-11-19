const request = require('request');
const {promisify} = require('util');

const promisifiedRequest = promisify(request);

const gameofthrones = async (id) => {
    let data = await promisifiedRequest({
        url: `https://www.anapioficeandfire.com/api/houses/${id}`,
        json: true
     
    });
    console.log(data.body)
    return data.body

}

module.exports = gameofthrones;