const inquirer = require(`inquirer`);
const connection = require("./config/connection");


// connection.query("select * from department", (err, res) => {
//     if(err) throw err;
//     console.log(res)}
//     )

inquirer.prompt([
    {
        type: 'list',
        name: 'view',
        choices: [
            "view department",
            "view role",
            "view employees",
            "add department",
            "add role",
            "add employees",

        ]
    },
]).then(data => {
    switch (data.view) {
        case "view department":
            connection.query("select * from department", (err, res) => {
                    if(err) throw err;
                    console.table(res)}
                    );
            break;
            case "view role":
                connection.query("select * from role", (err, res) => {
                        if(err) throw err;
                        console.table(res)}
                        );
                break;
                case "view employees":
                    connection.query("select * from employees", (err, res) => {
                            if(err) throw err;
                            console.table(res)}
                            );
                    break;
                    case "add department":
                                inquirer.prompt([
                                    {
                                    type: 'input',
                                    name: 'department',
                                    message: "what is the name of the department" 
                                    }]).then((data) =>  {
                                    let sql = `use officedb;INSERT INTO department(name);
                                    VALUES(?);`;
                 connection.query(sql ,data, (error, results, fields) => {
         if (error){
           return console.error(error.message);
         }
        console.log('Rows affected:');
        });
    });
                             
                        break;
                        case "add role":
                            inquirer.prompt([
                                {
                                type: 'input',
                                name: 'role',
                                message: "what is the title of the role" 
                                },
                                {
                                    type: 'input',
                                    name: 'role',
                                    message: "what is the salary of the role" 
                                    },
                                    {
                                        type: 'input',
                                        name: 'role',
                                        message: "what is the department id of the role" 
                                        },
                                    ]).then(data)
                                connection.query("INSERT INTO role (data)",  (err, res) => {
                                    if(err) throw err;

                                 console.table(res)}
                            );
            
                            break;
                            case "add employee":
                                inquirer.prompt([
                                    {
                                    type: 'input',
                                    name: 'role',
                                    message: "what is the first name of the employee" 
                                    },
                                    {
                                        type: 'input',
                                        name: 'role',
                                        message: "what is the last name of the employee" 
                                        },
                                        {
                                            type: 'input',
                                            name: 'role',
                                            message: "what is the role id of the employee" 
                                            },
                                            {
                                                type: 'input',
                                                name: 'role',
                                                message: "what is the manager id of the employee" 
                                                },
                                        ]).then(data)
                                    connection.query("INSERT INTO role (data)",  (err, res) => {
                                        if(err) throw err;
    
                                     console.table(res)}
                                );
                                break;
    
        default:
            break;
    }
})