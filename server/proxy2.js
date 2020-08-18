var express = require('express');
var app = express();
var PORT = 2500;
var moreplaces = 'http://localhost:3000';
const path = require('path');
const filePath = path.join(__dirname, '../client/dist');
app.use(express.static(filePath));

app.all("/app1/*", function(req, res) {
  res.send();
});

app.listen(2500, ()=> {
  console.log(`Listening on port ${2500}`)
})
