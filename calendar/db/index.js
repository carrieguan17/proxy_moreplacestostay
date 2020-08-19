const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = mongoose.connect('mongodb://localhost/calendar', { useNewUrlParser: true, useUnifiedTopology: true });


// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('connected to mongodb')
// });

const placeSchema = new Schema({
    pricePerNight: Number,
    rating: Number,
    maxGuestCount: Number,
    reviewCount: Number,
    cleaningFee: Number,
    serviceFee: Number,
    taxes: Number,
    bookedDates: [Date],
})
var schema = mongoose.model('Place', placeSchema)


const findPlace = function(cb) {
    schema.find({}, function (err, place) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, place);
        }
    })
}

module.exports.db = db;
module.exports.findPlace = findPlace;
//whatever comment