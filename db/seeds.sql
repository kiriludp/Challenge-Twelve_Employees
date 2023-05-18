-- information to be fed into the commadline code; this will allow us to search the database based on the below information --

insert into department(department_name)
values('HR'),
('Front of House'),
('Baking');

insert into job(title, salary, department_id)
values('Waiter', 35000, 2),
('Waiter', 40000, 2),
('BoH Manager', 80000, 3),
('Baker', 65000, 3),
('Owner', 95000, 1);


insert into employee(first_name, last_name, job_id, manager_id)
values('Ehba', 'Moon', 2, 5),
('Dima', 'Nikulachev', 1, 5),
('Amelia', 'Strange', 3, null),
('Renee', 'Strass', 4, 3),
('Shaw', 'Bardot', 5, null);