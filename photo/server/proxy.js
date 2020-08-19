const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const path = require('path');
const model = require('../db/model.js');
const PORT = 4343;

app.use('/property/:id', express.json());
app.use('/property/:id', express.static(path.join(__dirname, '../public')));

app.get('/properties/:id', (req, res) => {
  let property = req.params.id;
  model.getProperties(property, (err, results) => {
    if (err) {
      console.log(err);
      res.status(400);
    } else {
      res.status(200).send(results);
    }
  });
})
app.get('/rooms/:id', (req, res) => {
  let property = req.params.id;
  model.getRooms(property, (err, results) => {
    if (err) {
      console.log(err);
      res.status(400);
    } else {
      res.status(200).send(results);
    }
  });
})
app.get('/photos/:id', (req, res) => {
  let property = req.params.id;
  model.getPhotos(property, (err, results) => {
    if (err) {
      console.log(err);
      res.status(400);
    } else {
      res.status(200).send(results);
    }
  });
})

const Photos = 'http://localhost:4242',
    Calendar = 'http://localhost:3002',
    morePlaces = 'http://localhost:3002';

app.all("/property/:id", function(req, res) {
    console.log('redirecting to Photos');
    apiProxy.web(req, res, {target: Photos});
});

app.all("/app2/*", function(req, res) {
    console.log('redirecting to Calendar');
    apiProxy.web(req, res, {target: Calendar});
});

app.all("/app2/*", function(req, res) {
    console.log('redirecting to morePlaces');
    apiProxy.web(req, res, {target: morePlaces});
});

app.listen(4343);