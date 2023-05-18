const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql= require('mysql2');


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'TheItBoys#1!',
      database: 'employees_db'
    },
    console.log(`Connected to the employee_db database.`)
  );


    const menu = () => {
        inquirer.prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'menu',
            choices: ['View All Employees', 'View All Jobs', 'View All Departments', 'Add Employee', 'Add Job', 'Add Department', 'EXIT']

    }) 
    .then(options => {
        if(options.menu =='View All Employees'){
            db.query('select * from employee' , (err, result) => {
                if (err) {
                 console.log(err)
                } console.table(result);
            menu();
              })
        }
        else if(options.menu =='View All Jobs'){
            db.query('select * from job' , (err, result) => {
                if (err) {
                 console.log(err)
                } console.table(result);
            menu();
              })
        }
        else if(options.menu =='View All Departments'){
            db.query('select * from department' , (err, result) => {
                if (err) {
                 console.log(err)
                } console.table(result)
                menu()
              })
        
        }
        else if(options.menu =='Add Employee'){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the employees first name?',
                    name: 'firstName'
            },
            {
                    type: 'input',
                    message: 'What is the employees last name?',
                    name: 'lastName'
        },
        {
                type: 'input',
                message: 'What is the job id?',
                name: 'job_id'
        },
        {
                type: 'input',
                message: 'What is the manager id?',
                name: 'manager_id'
        },
        ])
        .then(answers=>{
            db.query(`insert into employee(first_name, last_name, job_id, manager_id) values(${answers.firstName}, ${answers.lastName}, ${answers.job_id}, ${answers.manager_id})`, (err, result) => {
                if (err) {
                    console.log(err)
                } console.table(result);
                menu();
            })
        })
        }
        else if(options.menu =='Add Job'){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the title of the job you would like to add?',
                    name: 'title'
            },
            {
                type: 'input',
                message: 'What is the salary of the job you would like to add?',
                name: 'salary'
        },
        {
            type: 'input',
            message: 'What is the department id of the job you would like to add?',
            name: 'department_id'
    },
        ])
        .then(answers=>{
            db.query(`insert into job(title, salary, department_id) values(${answers.title}, ${answers.salary}, ${answers.department_id})` , (err, result) => {
                if (err) {
                    console.log(err)
                } console.table(result);
                menu();
            })
        })
        }
        else if(options.menu =='Add Department'){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the name of the deparment you would like to add?',
                    name: 'name'
            },
        ])
        .then(answers=>{
            db.query(`insert into department(department_name) values(${answers.name})`, (err, result) => {
                if (err) {
                    console.log(err)
                } console.table(result);
                menu();
            })
        })

  }
})

    }
    menu();
    
