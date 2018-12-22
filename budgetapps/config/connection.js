// Set up MySQL connection.
var mysql = require("mysql12");
require("dotenv").config();
var connection;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "budget_db"
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

  connection = mysql.createConnection({
    'port': 3306,
    'host': process.env.HOST,
    'user': process.env.USERID,
    'password': process.env.PASSWORD,
    'database': process.env.DATABASE
  })

}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;