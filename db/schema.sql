
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- create all tables needed for the application -- 

CREATE TABLE department(
    id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR (30) NOT NULL
);

CREATE TABLE job (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL, 
    department_id INT
    
);

CREATE TABLE employee(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    job_id INT,
    manager_id INT
);

