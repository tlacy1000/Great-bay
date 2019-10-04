DROP DATABASE IF EXISTS great_bayDB;

CREATE DATABASE great_bayDB;

USE great_bayDB;

INSERT INTO auction (item, category, currentBid)
VALUES ("Elephant Tusk", "Black Market Tools", 9)

CREATE TABLE auction (
  item VARCHAR(50) NOT NULL,
  category VARCHAR (50) NOT NULL,
  currentBid INT NULL,
  PRIMARY KEY (id)
);


--Create an option for users to post an item or bid on an item-->

--If user posts an item, prompt them for info about item

