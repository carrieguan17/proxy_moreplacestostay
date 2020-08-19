// include dependencies
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const axios = require('axios');
const path = require('path');
const app = express();
const cors = require('cors');
const filePath = path.join(__dirname, './public');
app.use(cors());
app.use(express.static(filePath));


// proxy middleware options
const moreplaces = {
  target: 'http://localhost:3000', // target host
  changeOrigin: true,  // needed for virtual hosted sites
  ws: true, // proxy websockets
};

const photo = {
  target: 'http://localhost:4242', // target host
  changeOrigin: true, // needed åfor virtual hosted sites
  ws: true, // proxy websockets
};

const calendar = {
  target: 'http://localhost:5000', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
};

// create the proxy (without context)
const proxyM = createProxyMiddleware(moreplaces);
const proxyP = createProxyMiddleware(photo);
const proxyC = createProxyMiddleware(calendar);

// mount `exampleProxy` in web server

app.use('/place/*', proxyM);
app.use('/photo/*', proxyP);
app.use('/calendar/*', proxyC);
app.listen(2500);




