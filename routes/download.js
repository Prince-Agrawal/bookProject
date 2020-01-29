var express = require('express');
var router = express.Router();
var path = require('path')
var jsdom = require('jsdom');
// var {JSDOM} = jsdom;

/* GET download listing. */
router.get('/', function(req, res, next) {
    const keys = [];
    for(let k in req.query){
        keys.push(k);
    }
    console.log(keys[0]);

    const fileName = keys[0] + `.pdf`;
    const fileLocation = path.join(__dirname, "uploads", fileName);
    res.send(fileName)
    // res.download(fileLocation);
});


module.exports = router;