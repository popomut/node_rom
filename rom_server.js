//https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp
//https://www.tutorialspoint.com/mongodb/mongodb_update_document.htm

const express = require('express')
const app = express()

const books = require('./db')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";


app.get('/books', (req, res) => {
    
  console.log('req: ' + req)
  
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("romcard").find({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    res.json(result)
    db.close();
  });
});
})

///////////////////////////////////////////////////////////

app.get('/books/:id', (req, res) => {

  console.log('req: ' + req)
  
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { id: req.params.id };
  
  dbo.collection("romcard").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result)
    db.close();
  });
});
})


app.listen(3000, () => {
  console.log('Start server at port 3000.')
})