var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "wxuimlsdpfbo5cwt",
  password: "sar0oyd6al3e23nk",
  database: "syne9cp0mh6v4oli"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;