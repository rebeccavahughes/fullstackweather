// const {Router} = require('express');
// const router = Router();
// const request = require('request')



// router.get('/', (req, res) => {
//     let location = req.body.location;
//     let countryCode = req.body.countryCode;

//     let data = await getWeather(location, countryCode);
//     console.log(data.list[0])
//     if (data.list[0]){
//         console.log(data.list)
//         let City = data.list[0].name;
//        let Country = data.list[0].sys.country;
//         let Icon = data.list[0].weather[0].icon;
//         let Description = data.list[0].weather[0].description;
//         let Temperature = data.list[0].main.temp;
//         let Wind = data.list[0].wind.speed;
//     res.send(('index', {data: {City, Country, Description, Temperature, Wind}})
    
//     )}});


const getWeather = require ('../lib/getWeather')
var express = require("express");
var router = express.Router();

router.get("/", async function(req, res, next) {
    var city = req.query.city;
    let data = await getWeather(city);
    console.log(data);
    // let temp = data.list[0].main.temp;
    res.send(data);
    console.log(data)
});

module.exports = router;