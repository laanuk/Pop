var express = require('express');
var http = require('http');
var app = express();

// Routes
app.get('/query', function(req, response) {
    console.log(req._parsedUrl.query);
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
});

app.post('/complete', function (req, response) {
    console.log('received post request');
    res.end();
});

app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || 8000);
