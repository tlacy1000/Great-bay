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