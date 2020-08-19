/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/

 /* Need to run above command line from folder where schema.sql is */

 DROP DATABASE IF EXISTS airbnb_fec_photos;
 CREATE DATABASE airbnb_fec_photos;
 USE airbnb_fec_photos;

DROP TABLE IF EXISTS Property;
CREATE TABLE Property (
  id INTEGER NOT NULL AUTO_INCREMENT,
  Description VARCHAR(100),
  Rating DECIMAL(3,2),
  TotalReviews INTEGER,
  Superhost TINYINT,
  Location VARCHAR(100),
  PRIMARY KEY (id)
);


DROP TABLE IF EXISTS Rooms;
CREATE TABLE Rooms (
  id INTEGER NOT NULL AUTO_INCREMENT,
  RoomName VARCHAR(50),
  Amenities VARCHAR(100),
  PropertyID INTEGER,
  ShowOrder INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (PropertyID) REFERENCES Property(id)
);


DROP TABLE IF EXISTS Photos;
CREATE TABLE Photos (
  id INTEGER NOT NULL AUTO_INCREMENT,
  PhotoURL VARCHAR(300),
  RoomID INTEGER,
  PropertyID INTEGER,
  ShowOrder INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (RoomID) REFERENCES Rooms(id),
  FOREIGN KEY (PropertyID) REFERENCES Property(id)
);