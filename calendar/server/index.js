// Import the express framework for our node server
const express = require("express");
const mongoose = require("mongoose");
// Import the path module from node to create absolute file paths for express static
const path = require("path");

// Instantiate the express server
const app = express();
// Set a constant for the port that our express server will listen on
const PORT = 5000;
const db = require("../db/index.js");

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, "../public")));

//sending a get request
app.get("/calendar/place", function (req, res) {
  db.findPlace((err, place) => {
    // console.log('app.get')
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(place);
    }
  });
});

// Start the server on the provided port
app.listen(PORT, () => console.log("Listening on port: " + PORT));
