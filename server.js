var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		// new Date().toString()
		console.log('request ' + new Date().toString() + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

//specify middleware up top
//app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication,function (req, res) {
	res.send('Welcome to the page where we tell you all about us');
});

app.use(express.static(__dirname + '/public'));

//sonsole.log(__dirname);


app.listen(port, function() {
	console.log('express server has started on port: ' + port);
});//listen to port 3000