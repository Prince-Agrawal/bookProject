var express = require('express');
var router = express.Router();
var {Pool} = require('pg')

/* GET messageSubmit listing. */
router.get('/', function(req, res, next) {
    res.send('message submited!!!')
});

const connectionString = 'postgresql://testDatabase:10092000@localhost/school';

const pool = new Pool({
    connectionString:connectionString
})
pool.connect();

router.post('/email' , (req , res)=>{
    //send email here
    console.log('Data:' , req.body.username);
    
    pool.query(`insert into contactUs(username , emailId , message) values('${req.body.username}' , '${req.body.email}' , '${req.body.message}')` ,(err , result)=>{
        console.log(result);
        pool.end()
       })
       res.json({message : 'message recieved!!!!'})
})

module.exports = router;

