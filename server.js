var express = require('express');
var middleware = require('./middleware.js');
var app = express();
var port = process.env.PORT || 3000;


app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication,function (req, res) {
	res.send('Welcome to the page where we tell you all about us');
});

app.use(express.static(__dirname + '/public'));
app.listen(port, function() {
	console.log('express server has started on port: ' + port);
});