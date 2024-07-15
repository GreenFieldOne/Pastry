const mysql = require('mysql2');

//importing the config interface which organizes configuration files for different usage purpose, here development and testing.


// Create a database connection and export it from this file.
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', //username imported from the config files
    password: 'root', //password imported from the config files
    database: 'sweets' //database name imported from the config files
  });


  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      return;
    }
    console.log('Connected to the database as id', connection.threadId);
  });
// Connect to the database and make sure to log a message related to the connection state 

 module.exports=connection