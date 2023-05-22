-- information to be fed into the commadline code; this will allow us to search the database based on the below information --

INSERT INTO department(department_name)
VALUES ('HR'),
('Front of House'),
('Baking');

INSERT INTO job(title, salary, department_id)
VALUES ('Waiter', 35000, 2),
('Waiter', 40000, 2),
('BoH Manager', 80000, 3),
('Baker', 65000, 3),
('Owner', 95000, 1);


INSERT INTO employee(first_name, last_name, job_id, manager_id)
VALUES ('Ehba', 'Moon', 2, 5),
('Dima', 'Nikulachev', 1, 5),
('Amelia', 'Strange', 3, null),
('Renee', 'Strass', 4, 3),
('Shaw', 'Bardot', 5, null);