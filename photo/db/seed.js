const db = require('./index.js');
const faker = require('faker');

var cities = ['Malibu', 'Los Angeles', 'Hollywood', 'Pasadena', 'Beverly Hills', 'Santa Monica'];

var adjectives = ['Luxurious', 'Modern', 'Upscale', 'Spacious', 'Sumptuous', '$20 million', 'Enchanting', 'Contemporary'];

var typeOfPlaces = ['home', 'villa', 'mansion', 'estate', 'residence'];

var connectors = ['near', 'in', 'with views of'];

var rooms = ['Living room', 'Kitchen', 'Bedroom', 'Bathroom', 'Dining room', 'Family room', 'Outdoor area'];

var amenities = ['Air conditioning', 'Terrace', 'Wine cooler', 'King bed', 'Memory foam mattress', 'En suite bathroom', 'Beach view', 'Queen bed', 'Jetted tub', 'SONOS sound system'];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomReviewScore = function() {
  var score = getRandomInt(3, 5);
  if (score === 5) {
    return score.toFixed(2);
  } else {
    return (score + Math.random()).toFixed(2);
  }
};


var photoURLs = [
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/00e10aeb-16f0-4957-ae5e-a2564abd74ad.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/04f28e03-1950-4208-bf85-b4ded0e49166.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/1065e704-9d1f-46c7-b53a-e4750cdb5367.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/13cbc151-26c5-4a36-99f8-a419e81ae1ee.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/152c12c8-6e29-4dba-8a20-c7afbeeb8461.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/158b2b37-da63-4733-8074-0d10d1cfc466.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/16bc51f3-cca7-4586-91a1-bb3dca24db60.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/1d315940-e2bd-48eb-b403-109571e47ac9+(1).jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/1d315940-e2bd-48eb-b403-109571e47ac9.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/1fb9eb45-932e-4cc0-b469-21896dd158af.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/2156d309-0ddc-499b-acf6-dcba13005d87.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/24522074-1ffe-4942-b3ed-40ce513b8c69+(1).jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/24522074-1ffe-4942-b3ed-40ce513b8c69+(2).jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/24522074-1ffe-4942-b3ed-40ce513b8c69.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/2b44109d-12f4-42ce-a6f5-e33b6ed451ff+(1).jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/2b44109d-12f4-42ce-a6f5-e33b6ed451ff+(2).jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/2b44109d-12f4-42ce-a6f5-e33b6ed451ff.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/2bc8c3e0-73a7-4ab3-a284-f9890f6a9b4d.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/2c70378e-a60c-4c84-a763-5325cdcd21ea+(1).jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/2c70378e-a60c-4c84-a763-5325cdcd21ea.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/30f4773b-7d98-4c6d-8cc1-660d94f1923e.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/3dedc72a-570a-4bfa-88e0-42f55ab1b17f.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/42242117-ae0f-41c3-ae2b-b9b58d485d1e.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/43b99545-3994-48cf-a997-8dda0a2c0387.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/4bb58786-cf86-48ac-9203-cde18dd33b7e.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/4d41bc8e-102c-4556-b76c-5ea6164d4ed9.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/50ff73e3-9d7a-44f0-8014-c3eaf95e6029.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/5e01ea9c-778d-4e44-823f-b0d55b9719ab.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/69efc6f0-cd7f-4ccc-a563-717bf8627f7f.jpg',
  'https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/6d21a3be-3114-4cdd-ab8b-75c02a6812b4.jpg'
];

var seedDatabase = function() {
  for (var i = 1; i <= 100; i++) {
    var city = cities[getRandomInt(0, cities.length -1)];
    var adjective = adjectives[getRandomInt(0, adjectives.length - 1)];
    var typeOfPlace = typeOfPlaces[getRandomInt(0, typeOfPlaces.length - 1)];
    var connector = connectors[getRandomInt(0, connectors.length - 1)];

    db.query(`INSERT INTO Property (Description, Rating, TotalReviews, Superhost, Location) VALUES ("${adjective + ' ' + typeOfPlace + ' ' + connector + ' ' + city}", ${randomReviewScore()}, ${getRandomInt(1, 30)}, ${getRandomInt(0, 1)}, "${city}, California, United States")`, (error, propertyResults, fields) => {
      if (error) {
        console.log(error);
      } else {
        for (var j = 0; j < rooms.length; j++) {
          var amenity = amenities[getRandomInt(0, amenities.length - 1)];
          db.query(`INSERT INTO Rooms (RoomName, Amenities, PropertyID, ShowOrder) VALUES ("${rooms[j]}", "${amenity}", ${propertyResults.insertId}, ${j})`, (error, roomsResults, fields) => {
            if (error) {
            } else {
              for (var k = 1; k < 4; k++) {
                db.query(`INSERT INTO Photos (PhotoURL, RoomID, PropertyId, ShowOrder) VALUES ("${photoURLs[getRandomInt(0, photoURLs.length - 1)]}", ${roomsResults.insertId}, ${propertyResults.insertId}, ${k})`, (error, results, fields) => {
                  if (error) {
                    console.log(error);
                  }
                })
              }
            }
          });
        }
      }
    });
  }
};

seedDatabase();


