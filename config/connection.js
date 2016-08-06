var mysql = require('mysql');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'burgers_DB'
});

connection.connect(function(err) {
  if (err) throw err;
};


module.exports