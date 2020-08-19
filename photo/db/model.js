const db = require('./index.js');

module.exports = {
  getProperties: function(propertyId, callback) {
    db.query(`SELECT * FROM property WHERE id = ${propertyId}`, (err, results, fields) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  getRooms: function(propertyId, callback) {
    db.query(`SELECT * FROM rooms WHERE PropertyID = ${propertyId}`, (err, results, fields) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  getPhotos: function(propertyId, callback) {
    db.query(`SELECT * FROM photos WHERE PropertyID = ${propertyId}`, (err, results, fields) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
}