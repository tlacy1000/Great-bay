
DROP DATABASE IF EXISTS greatBay_db;

CREATE DATABASE greatBay_db;

USE greatBay_db;

CREATE TABLE auction (
	id INT NOT NULL AUTO_INCREMENT,
    item VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    currentBid INT(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO auction (item, category, currentBid)
VALUES ("Elephant Tusk", "Black Market Tools", 9)



--Create an option for users to post an item or bid on an item-->

--If user posts an item, prompt them for info about item

