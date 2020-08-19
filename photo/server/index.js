const express = require('express');
const app = express();
const path = require('path');
const model = require('../db/model.js');

const PORT = 4242;

app.use((req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.path}`);
  next();
});

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

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
})