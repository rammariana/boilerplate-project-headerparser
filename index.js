// index.js
// where your node app starts

// init project
require('dotenv').config();
const requestIp = require('request-ip');
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// IP
app.use(requestIp.mw());

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});
// My Code Starts Here
app.get('/api/whoami', function (req, res) {
  const ipadress = req.clientIp;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  
  res.json({ip: ipadress, lang: language, software});
});
// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
