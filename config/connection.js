// Set up MySQL connection
var mysql = require("mysql");

var connection;

console.log(process.env.CLEARDB_DATABASE_URL);

if (process.env.CLEARDB_DATABASE_URL) {
connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
};

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
//mysql://b78c94370867cb:bac431b4@us-cdbr-iron-east-05.cleardb.net/heroku_7dc163398f910b9?reconnect=true

// DB_HOST: us-cdbr-iron-east-05.cleardb.net
// DB_DATABASE: heroku_7dc163398f910b9
// DB_USERNAME: b78c94370867cb
// DB_PASSWORD: bac431b4