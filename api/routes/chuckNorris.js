const chucknorris = require ('../lib/chucknorris')
var express = require("express");
var router = express.Router();

router.get("/", async function(req, res, next) {
    let data = await chucknorris();
    console.log(data)
    res.send(data);
});

module.exports = router;