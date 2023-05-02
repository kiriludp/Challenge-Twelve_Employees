const inquirer = require('inquirer');
require('console.table');
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
    console.log(`Connected to the movies_db database.`)
  );

  function menu () {
    inquirer.prompt ({

        type: 'list',
        message: 'What would you like to do?',
        name: 'menu',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']

    }) 
    .then(options => {
        if(options.menu =='View All Employees'){
            db.query('select * from employee' , (err, result) => {
                if (err) {
                 console.log(err)
                } console.table(result)
              })
        }
        else if(options.menu =='View All Roles'){
            db.query('select * from role' , (err, result) => {
                if (err) {
                 console.log(err)
                } console.table(result)
                menu()
              })
        }
        // Adding Role sample
        else if(options.menu =='Add Role'){
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the title of the role you would like to add?',
                    name: 'title'
            },
            {
                type: 'input',
                message: 'What is the salary of the role you would like to add?',
                name: 'salary'
        },
        {
            type: 'input',
            message: 'What is the department id of the role you would like to add?',
            name: 'department_id'
    },
        ])
        .then(answers=>{
            db.query(`insert into role(title, salary, department_id) values(${answers.title}, ${answers.salary}, ${answers.department_id})` , (err, result) => {
                if (err) {
                    console.log(err)
                } console.table(result)
                menu()
            })
        })
        }
        
    })
  } 
  menu()