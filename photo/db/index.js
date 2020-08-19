var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'yourpassword',
  database : 'airbnb_fec_photos'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to DB');
  }
});

module.exports = connection;