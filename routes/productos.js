var express = require('express');
const mysql = require('mysql');
var router = express.Router();
const mysqlConfig = require('../mysql-config');
const renderListaProductos = require('../public/productos')



/* GET nosotros listing. */
router.get('/', function(req, res, next) {
  if (process.env.SQL_DISABLED !== 'true') {
    const dbConnection = mysql.createConnection({
      host: mysqlConfig.EnvironmentVariables.host,
      user: mysqlConfig.EnvironmentVariables.user,
      password: mysqlConfig.EnvironmentVariables.password,
      database: mysqlConfig.EnvironmentVariables.database
    });

    dbConnection.query("SELECT * FROM productos", function (err, productsList, fields) {
      if (err) throw err;
      res.send(renderListaProductos.ListaProductosView(process.env.SQL_DISABLED === 'true', productsList))
    })
  }
  else {
    res.send(renderListaProductos.ListaProductosView(process.env.SQL_DISABLED === 'true'))
  }
} );

module.exports = router;