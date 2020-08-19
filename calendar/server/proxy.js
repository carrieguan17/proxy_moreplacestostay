var express = require("express");
var app = express();
var httpProxy = require("http-proxy");
var apiProxy = httpProxy.createProxyServer();
var calendar = "http://localhost:5000";
var PORT = 5001;
//   photos = "http://localhost:3002",
//   morePlaces = "http://localhost:3002";
const path = require("path");
const db = require("../db/index.js");

app.use(express.static(path.join(__dirname, "../public")));

app.all("/place/*", function (req, res) {
  console.log("redirecting to Calendar");
  apiProxy.web(req, res, { target: calendar });
});

app.get("/place", function (req, res) {
  db.findPlace((err, place) => {
    // console.log('app.get')
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(place);
    }
  });
});

// app.all("/app2/*", function (req, res) {
//   console.log("redirecting to Server2");
//   apiProxy.web(req, res, { target: photos });
// });

// app.all("/app2/*", function (req, res) {
//   console.log("redirecting to Server3");
//   apiProxy.web(req, res, { target: morePlaces });
// });

app.listen(5001);
