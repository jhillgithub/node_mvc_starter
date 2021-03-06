/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: '{{cookiecutter.db_user}}',
	password: '{{cookiecutter.db_password}}',
	database: '{{cookiecutter.db_name}}'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
