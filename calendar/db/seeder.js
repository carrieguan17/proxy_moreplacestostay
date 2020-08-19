const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = require("./index.js");

const placeSchema = new Schema({
  pricePerNight: Number,
  rating: Number,
  maxGuestCount: Number,
  reviewCount: Number,
  cleaningFee: Number,
  serviceFee: Number,
  taxes: Number,
  bookedDates: [Date],
});
var schema = mongoose.model("Place", placeSchema);

var newPlaces = [
  {
    pricePerNight: 6950,
    rating: 4.89,
    maxGuestCount: 8,
    reviewCount: 63,
    cleaningFee: 395,
    serviceFee: 2999,
    taxes: 834,
    bookedDates: [08 / 01 / 2020],
  },
];

const insertPlaces = function () {
  schema.create(newPlaces);
};
// db.disconnect is not working but not sure why.
// console.log(db)
insertPlaces();

module.exports.schema = schema;
