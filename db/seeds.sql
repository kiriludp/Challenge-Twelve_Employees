insert into department(name)
values('HR'),
('Administration'),
('Operations');

insert into role(title, salary, department_id)
values('HR Consultant', 80000, 1),
('Operations Manager', 70000, 3 ),
('Operations Worker', 70000, 3 );

insert into employee(first_name, last_name, role_id, manager_id)
values('jane', 'doe', 2, null),
('john', 'doe', 3, 1);