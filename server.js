var express = require("express");
var app = express();


/****************************************** */
/***Server Configuration */
/****************************************** */

/*render HTML from the endpoints */
var ejs = require('ejs');
app.set('views', __dirname + "/public");
app.engine('html', ejs.renderFile);
app.set('view engine', ejs);

/****server static file (js,css,img,pdf) */

app.use(express.static(__dirname + '/public'));

// configure body-parser to read  req payload
var bparser = require('body-parser');
app.use(bparser.json());

/****************************************** */
/***Server HTML */
/****************************************** */


app.get('/', function (req, res) {
    res.render('index.html');
});



// create the /dmin endpoint
//server the min.html

app.get('/admin', function (req, res) {
    res.render('admin.html');
});

app.get('/about', function (req, res) {
    res.send('<h1 style="color:blue">Christian Mercado-Astarita</h1>');
});

app.get('/tasks', function (req, res) {
    res.send('<h2 style="color:black">I need to play Zelda! The winds if the hero survives NOT fails!!</h>');
});

app.get('/contact', function (req, res) {
    res.send('<h1 style="color: red, font-size: 25px">Please contact me at this email</h1> <address> christianmastarita3@outlook.com </address> ');
});


/****************************************** */
/***API Endpoints */
/****************************************** */

var list = [];

app.post('/API/items', function (req, res) {
    var item = req.body;

    list.push(item);
    res.json(item);
});

app.get('/API/items', function (req, res) {
    res.json(list);
});


// start the project
app.listen(8080, function () {
    console.log("Local host running at Localhost:8080")
});


// Ctrl + C to kill the server
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

//API application programmin interface