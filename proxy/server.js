// include dependencies
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const axios = require('axios');
const path = require('path');
const app = express();
const cors = require('cors');
const filePath = path.join(__dirname, './public');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.static(filePath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware method
  // proxy middleware options
  // const moreplaces = {
  //   target: 'http://50.18.72.36:3000', // target host
  //   changeOrigin: true,  // needed for virtual hosted sites
  //   ws: true, // proxy websockets
  // };

  // const photo = {
  //   target: 'http://13.56.81.188:4242/property/1', // target host
  //   changeOrigin: true, // needed åfor virtual hosted sites
  //   ws: true, // proxy websockets
  // };

  // const calendar = {
  //   target: 'http://50.18.32.160:3001', // target host
  //   changeOrigin: true, // needed for virtual hosted sites
  //   ws: true, // proxy websockets
  // };

  // create the proxy (without context)
  // const proxyM = createProxyMiddleware(moreplaces);
  // const proxyP = createProxyMiddleware(photo);
  // const proxyC = createProxyMiddleware(calendar);

  // mount `exampleProxy` in web server

  // app.use('/place/*', proxyM);
  // app.use('/property/*', proxyP);
  // app.use('/calendar/*', proxyC);
app.listen(2500);

// port 3000 (moreplaces)
// app.all("/stay/*", (req, res) => {
//   axios({
//     method: req.method,
//     url: "http://18.144.9.100" + req.originalUrl,
//     headers: req.headers,
//     data: req.data
//   }).then((response) => {
//     res.send(response.data);
//   }).catch((err) => console.log(err));
// });

app.get("/stay/*", (req, res) => {
  axios.get("http://18.144.9.100" + req.originalUrl)
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/stay/*", (req, res) => {
  axios.post("http://18.144.9.100" + req.originalUrl, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// port 3001 (calendar)
app.all("/calendar/*", (req, res) => {
  axios({
    method: req.method,
    url: "http://50.18.32.160" + req.originalUrl,
    headers: req.headers,
    data: req.data
  }).then((response) => {
    res.send(response.data);
  }).catch((err) => console.log(err));
});

// port 4242 (photos)
app.all("/photos/*", (req, res) => {
  axios({
    method: req.method,
    url: `http://50.18.139.102` + req.originalUrl,
    headers: req.headers,
    data: req.data
  }).then((response) => {
    res.send(response.data);
  }).catch((err) => console.log(err));
});


