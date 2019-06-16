const mysql = require('mysql');
const mysqlConfig = require('../mysql-config');
const tableRows = require('./tableRows')

function DatabaseActivation(){
  const mysqlConnection = mysql.createConnection({
    host: mysqlConfig.EnvironmentVariables.host,
    user: mysqlConfig.EnvironmentVariables.user,
    password: mysqlConfig.EnvironmentVariables.password
  });
  
  const dbConnection = mysql.createConnection({
    host: mysqlConfig.EnvironmentVariables.host,
    user: mysqlConfig.EnvironmentVariables.user,
    password: mysqlConfig.EnvironmentVariables.password,
    database: mysqlConfig.EnvironmentVariables.database
  });

  mysqlConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL.");
    mysqlConnection.query("CREATE DATABASE IF NOT EXISTS basefinalnode DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;", function (err, result) {
      if (err) {
        console.log('Linea de comandos a seguir:')
        console.log('sudo apt-get install mysql-server')
        console.log('sudo mysql')
        console.log("create user nodeuser@localhost identified by 'nodeuser@1234';")
        console.log('grant all privileges on *.* to nodeuser@localhost;')
        throw err
      };
      console.log("Connected to basefinalnode Database");
    });
  });
  
  dbConnection.connect(function(err) {
    const productsListTable = "CREATE TABLE IF NOT EXISTS productos ("
                            +"id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,"
                            +"nombre VARCHAR(255),"
                            +"descripcion TEXT NOT NULL,"
                            +"precio DECIMAL(10,2) NOT NULL,"
                            +"imagen VARCHAR(100) NOT NULL"
                            +") ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1";
    dbConnection.query(productsListTable, function (err, result) {
      if (err) throw err;
      console.log("Table productos ready");
    });
  
    dbConnection.query("SELECT COUNT(*) FROM productos;", function (err, result, fields) {
      const rowsNumber = Object.values(result[0])[0]
      if (err) throw err;
      console.log('productos Table Rows Number: ', rowsNumber);

      if (rowsNumber < 1) {
        console.log('Adding records to productos Table...')
        tableRows.addRows(dbConnection)
      }
    });
  });
}

module.exports.DatabaseActivation = DatabaseActivation;