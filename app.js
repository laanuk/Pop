var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use( bodyParser.urlencoded({ extended : true }));


// Routes
app.get('/query', function(req, res) {
    console.log(req._parsedUrl.query);
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
});

app.post('/complete', function (req, res) {
    console.log('received post request');
    var score = req.body.value;
    console.log(score);
    res.end();
});

app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || 8000);
