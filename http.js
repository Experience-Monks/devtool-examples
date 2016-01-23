var http = require('http');
var stacked = require('stacked');

var app = stacked();

// server entry point
app.use(function (req, res, next) {
  if (req.url === '/') {
    res.end('Hello, world!');
  } else {
    next();
  }
});

// handle errors
app.use(function (req, res, next) {
  var statusCode = 404;
  var message = '404 not found =(';

  res.statusCode = statusCode;
  res.end(message);
});

var server = http.createServer(app)
  .listen(8080, function () {
    console.log('Listening on http://localhost:8080/');
  });

// Before closing/reloading, close the server
window.onbeforeunload = function () {
  server.close();
};
