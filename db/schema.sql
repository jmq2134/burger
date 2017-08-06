### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers` (
    ID int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured boolean,
    date TIMESTAMP,
    PRIMARY KEY (ID)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Gourdon-Hamsey Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Poutine on the Ritz Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Lets Give Em Something Shiitake Bout Burger', false);

