var express = require('express');
var router = express.Router();
var {Client , Pool} = require('pg')
var path = require('path')

const connectionString = 'postgresql://testDatabase:10092000@localhost/school';

const client = new Client({
    connectionString:connectionString
})

client.connect();


/* GET search listing. */
router.get('/', function(req, res, next) {
  var searchBoxData = req.query.box;
  client.query(`select * from students where fname like '%${searchBoxData}%'` ,(err , result)=>{
    res.render('searchRelated' , {
      result: result.rows
    })
   })
});

module.exports = router;
