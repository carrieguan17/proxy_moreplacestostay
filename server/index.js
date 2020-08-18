// import dependencies
var express = require('express');
var app = express();
var PORT = 3000;
// This refers to the "dbroom" variable defined at the top of index_room.js, which is different from "Room" below; the purpose of importing this variable is to verify whether the server is connected to DB.
var dbroom = require('../database/index.js');
// var dblist = require('../database/index_list.js')
// This refers to the module exported at the borrom of index_room.js, which is different from "dbroom" above; the purpose is to use the properties inside the module.
const Room = require('../database/index.js');
const List = require('../database/index.js');
const path = require('path');
const filePath = path.join(__dirname, '../client/dist');
const bodyparser = require('body-parser');

// middleware
app.use(express.static(filePath));
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded( {extended: true} ));

// set up for proxy
app.get('/app1',function(req,res) {
  res.send("Hello world From Server 1");
});

// routes (will make a router to direct different routes)

// Below is a GET request to obatin all of the room info
app.get('/room', (req, res) => {
  Room.getAllRooms((err, result) => {
    if (err) {
      res.status(401)
      res.end()
      console.log(err, `Server get room err`)
    } else {
      res.status(201)
      res.send(result)
      res.end()
      console.log(`Server get room success`)
    }
  })
})

// Below is a GET request to obatin all of the list info
app.get('/list', (req, res) => {
  List.getAllLists((err, result) => {
    if (err) {
      res.status(401)
      res.end()
      console.log(err, `Server get list err`)
    } else {
      res.status(201)
      res.send(result)
      res.end()
      console.log(`Server get list success`)
    }
  })
})

app.post('/room', (req, res) => {
  let info = req.body;
  Room.addToList(info, (err, result) => {
    if (err) {
      res.status(401)
      res.send(err)
    } else {
      res.status(201)
      res.send()
      res.end()
    }
  })
})

app.post('/list', (req, res) => {
  let info = req.body;
  List.incList(info, (err, result) => {
    if (err) {
      res.status(401)
      res.send(err)
    } else {
      res.status(201)
      res.send()
      res.end()
    }
  })
})

app.post('/removeRoom', (req, res) => {
  let info = req.body;
  Room.removeRoom(info, (err, result) => {
    if (err) {
      res.status(401)
      res.send(err)
    } else {
      res.status(201)
      res.send()
      res.end()
    }
  })
})

app.post('/decList', (req, res) => {
  let info = req.body;
  List.decList(info, (err, result) => {
    if (err) {
      res.status(401)
      res.send(err)
    } else {
      res.status(201)
      res.send()
      res.end()
    }
  })
})

app.post('/createList', (req, res) => {
  let info = req.body;
  List.createList(info, (err, result) => {
    if (err) {
      res.status(401)
      res.send(err)
    } else {
      res.status(201)
      res.send()
      res.end()
    }
  })
})

// start server
app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})