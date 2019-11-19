const gameofthrones = require ('../lib/gameofthrones')
var express = require("express");
var router = express.Router();

router.get("/", async function(req, res, next) {
    let house = req.query.house
    switch(house){
        case house: "House Algood"
            id = 1;
            break;
        case house: "House Allyrion of Godsgrace"
            id = 2
            break;
        case house: "House Amber"
            id = 3
            break;
        case house: "House Ambrose"
            id = 4
            break;
        case house: "House Appleton of Appleton"
            id = 5
            break;
        case house: "House Arryn of Gulltown"
            id = 6
            break;
        case house: "House Arryn of the Eyrie"
            id = 7
            break;
        case house: "House Ashford of Ashford"
            id = 8
            break;
        case house: "House Ashwood"
            id = 9
            break;
        case house: "House Baelish of Harrenhal"
            id = 10
            break;
        
    }
    console.log(id)
    let data = await gameofthrones(id);
    console.log(data)
    res.send(data);
});

module.exports = router;