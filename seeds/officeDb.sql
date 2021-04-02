
DROP DATABASE IF EXISTS officeDb;

CREATE DATABASE officeDb;


USE officeDb;


CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENt PRIMARY KEY,
name VARCHAR(30) ,
);

CREATE TABLE role(
id INT NOT NULL AUTO_INCREMENt PRIMARY KEY,
title  VARCHAR(30), 
salary DECIMAL,
department_id INT ,
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENt PRIMARY KEY,
first_name VARCHAR(30), 
last_name VARCHAR(30),
role_id INT ,
manager_id INT ,
);


-- Creates new rows containing data in all named columns --
INSERT INTO department (name)
VALUES (junior developer);

INSERT INTO role (title, salary, department_id)
VALUES (junior developer, 70000, 1);

INSERT INTO employee (first_name , last_name , role_id , manager_id)
VALUES (joe, henry, 1, 0);


