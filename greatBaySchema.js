var output = require("./inquirer.js");

require("dotenv").config();
var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password:  process.env.DB_Password,
  database: "greatbaydb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
      connection.end();
});


