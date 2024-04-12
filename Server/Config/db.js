const mysql = require('mysql2');
require('dotenv').config();

const connettion = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	waitForConnections: true,
	connectionLimit: 10,
});

connettion.connect((error) => {
	if (error) throw error;
	console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connettion;
