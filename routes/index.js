var express = require('express');
var router = express.Router();
var {Client} = require('pg')

const connectionString = 'postgresql://testDatabase:10092000@localhost/school';

const client = new Client({
    connectionString:connectionString
})

client.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  client.query(`select * from students` ,(err , result)=>{
    res.render('index' , {
      result: result.rows
    })
   })
});

module.exports = router;
