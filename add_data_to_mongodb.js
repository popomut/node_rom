var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// this is for test DB connection with MongoDB
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
*/

/////////////////////////////////////////////////////



/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
//  var myobj2 = {
//      "id": "1",
//      "name": "Eggyra",
//      "effect": ["INT +2","SP Regen +5"],
//      "permanent": ["Max HP +28"]
//    };
    
    var myobj3 = {
      "id": "2",
      "name": "Chon Chon",
      "effect": ["STR +2","DEF +2"],
      "permanent": ""
    }
  
  
  
  dbo.collection("romcard").insertOne(myobj3, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});*/


///////////////////////////////////////////////////
//test get data from mongodb.

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var temp = "1";
  var query = { id: temp };
  
  dbo.collection("romcard").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);

    db.close();
  });
});

