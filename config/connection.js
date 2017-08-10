// Set up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "be1ff39a325763",
  password: "0a069e12",
  database: "heroku_543994320c3169f"
});

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;

// CLEARDB_DATABASE_URL: 
// mysql://be1ff39a325763:0a069e12@

// DB_HOST: us-cdbr-iron-east-05.cleardb.net
// DB_DATABASE: heroku_543994320c3169f
// DB_USERNAME: be1ff39a325763
// DB_PASSWORD: 0a069e12