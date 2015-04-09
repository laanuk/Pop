var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require( 'mongoose' );
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use( bodyParser.urlencoded({ extended : true }));

mongoose.connect('mongodb://laanuk:kanchan8@ds059651.mongolab.com:59651/popusers');

var schema = new mongoose.Schema({
    name: String,
    score: Number
});

var Popuser = mongoose.model('Popuser', schema);

// Routes
app.get('/', function(req, res) {
    res.render('index');
    res.end();
});

app.get('/stats', function(req, res) {
    var query = Popuser.find({});
    query.select('name score');

    query.exec(function (err, person) {
        if (err) return handleError(err);
        console.log("user array : " + person);
        res.render('stats', {users : person});
    })
});

app.post('/complete', function (req, res) {
    console.log('received post request');
    var p = req.body.name;
    var scr = req.body.score;
    console.log(p + " " + scr);

    var user = new Popuser({name: p, score: scr});
    user.save(function(err){
        if(err)
        console.log(err);
        else
        console.log(user);
    });
    res.end();

});

app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || 8000);
