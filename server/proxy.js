var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
const path = require('path');
const filePath = path.join(__dirname, '../client/dist');
var moreplaces = 'http://localhost:3000',
    photos = 'http://localhost:4242',
    calandar = 'http://localhost:5000';

app.use(express.static(filePath));
app.all("/app1/*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: moreplaces});
});

app.all("/app2/*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: photos});
});

app.all("/app2/*", function(req, res) {
    console.log('redirecting to Server3');
    apiProxy.web(req, res, {target: calandar});
});

app.listen(2501, ()=> {
  console.log(`Listening on port ${2501}`)
})