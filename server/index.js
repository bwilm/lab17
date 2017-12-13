var path = require('path');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var clientPath = path.join(__dirname, '../client');
var app = express();
app.use(express.static(clientPath));
app.use(bodyParser.json());

var mongo = require('mongodb').MongoClient;
var db;


mongo.connect('mongodb://localhost:27017/Locations',
function(err,database){
    if(err){
        console.log(err);
    }
    else{
        db = database;
        app.listen(3000);        
    }
});


app.route('/api/locations')
.get(function(req, res) {
    db.collection('pizzaPlanet').find().toArray(function(err, locations){
        if (err) {
            console.log(err);
        } else {
            res.send(locations);
        }
    })
}).post(function(req, res) {
    console.log('post');
    let document = req.body;
    db.collection('pizzaPlanet').insert(document), function(err,records){
        console.log('posted new location')
        res.send(201);
    }       
})


