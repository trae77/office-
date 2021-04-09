const inquirer = require(`inquirer`);
const connection = require("./config/connection");

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "view",
        choices: [
          "view department",
          "view role",
          "view employees",
          "add department",
          "add role",
          "add employees",
          "update employee",
          "exit"
        ],
      },
    ])
    .then((data) => {
      switch (data.view) {
        case "view department":
          connection.query("select * from department", (err, res) => {
            if (err) throw err;
            console.table(res);
            start();
          });
          break;
        case "view role":
          connection.query("select * from role", (err, res) => {
            if (err) throw err;
            console.table(res);
            start();
          });
          break;
        case "view employees":
          connection.query("select * from employee", (err, res) => {
            if (err) throw err;
            console.table(res);
            start();
          });
          break;
        case "add department":
          depart();

          break;
        case "add role":
          role();

          break;
        case "add employees":
          employee();
          break;
          case "update employee":
           update();
          case "exit":
            connection.end();
            break;
        default:
          console.log(`invalid action: ${data.view}`)
          break;
      }
    });
}
function depart() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "what is the name of the department",
      },
    ])
    .then((data) => {
      connection.query(
        " INSERT INTO department SET ?",
        {
          name: data.department,
        },
        function (err, res) {
          console.table(data);
          start();
        }
      )
    })
}

function role() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "what is the title of the role",
      },
      {
        type: "input",
        name: "salary",
        message: "what is the salary of the role",
      },
      {
        type: "input",
        name: "departmentId",
        message: "what is the department id of the role",
      },
    ])
    .then((data)  => {
  connection.query(
    " INSERT INTO role SET ?",
    {
      title: data.title,
      salary: data.salary,
      deparment_id: data.departmentId,
    },
    function (err, res) {
      console.table(data);
      start();
    }
  )
})
};

function employee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "what is the first name of the employee",
      },
      {
        type: "input",
        name: "lastName",
        message: "what is the last name of the employee",
      },
      {
        type: "input",
        name: "roleId",
        message: "what is the role id of the employee",
      },
      {
        type: "input",
        name: "managerId",
        message: "what is the manager id of the employee",
      },
    ])
    .then((data) => {
  connection.query(
    " INSERT INTO department SET ?",
    {
      first_name: data.firstName,
      last_name: data.lastName,
      manager_id: data.managerId,
      role_id: data.roleId
    },
    function (err, res) {
      console.table(data);
      start();
    }
  )
})}

function update (){
  inquirer
  .prompt([
    {
      type: "list",
      name: "update",
      choices: [
        "update firstname",
        "update lastname",
        "update roleId",
        "update managerId",
      ]
    }
    ])
      .then((data) => {
        switch (data.update) {
          case "update firstname":
           
            inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "what is the first name of the employee",
      }  ])
      .then((data) => {
            connection.query(
              " INSERT INTO employee SET ?",
              {
                first_name: data.firstName,
              },
              function (err, res) {
                console.table(data);
                start();
              }
            )})
            break;

            case "update lastname":
              inquirer
              .prompt([
                {
                  type: "input",
                  name: "firstName",
                  message: "what is the last name of the employee",
                }  ])
                .then((data) => {
                      connection.query(
                        " INSERT INTO employee SET ?",
                        {
                          last_name: data.lastName,
                        },
                        function (err, res) {
                          console.table(data);
                          start();
                        }
                      )})
              break;

              case "update managerId":
                connection.query(
                  " INSERT INTO employee SET ?",
                  {
                    manager_id: data.managerId,
                  },
                  function (err, res) {
                    console.table(data);
                    start();
                  }
                )
                break;

                case "update roleid":
                  inquirer
                  .prompt([
                    {
                      type: "input",
                      name: "roleId",
                      message: "what is the role id of the employee",
                    }  ])
                    .then((data) => {
                          connection.query(
                            " INSERT INTO employee SET ?",
                            {
                              role_id: data.roleId
                            },
                            function (err, res) {
                              console.table(data);
                              start();
                            }
                          )})
                  break;
      }})
    }
      
start()

// UPDATE people
// SET has_pet = true, pet_name = "Franklin", pet_age = 2
// WHERE id = 4;