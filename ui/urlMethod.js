var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyparser = require('body-parser');
app.use(bodyparser.json());

var config = {
  user: 'ranjithdss15',
  host: 'db.imad.hasura-app.io',
  database: 'ranjithdss15',
  password: process.env.DB_PASSWORD,
  port: 5432,
};


console.log("URL method loaded");
var test = document.getElementById('shorten');
test.onclick = function() {
    alert("Loaded");
};

    
    
 var pool = new Pool(config);
app.get('/actualurl/:extensionIn', function (req, res) {
var var1 =req.params.extensionIn;
 pool.query('INSERT INTO "shorturls" (extension) VALUES ($1)', [var1], function(err, result) {
  if (err) {
    res.status(500).send(err.toString());
    alert("Error");
  } 
   else {
      pool.query('SELECT "urls" FROM "shorturls" WHERE extension = ($1)', [var1], function(err, result) {
  if (err) {
    res.status(500).send(err.toString());
    alert("Error");
  } else {
   // console.log(res.rows[0]);
  res.send(JSON.stringify(result.rows));
  }
      }); 
  }
  
 });
});
