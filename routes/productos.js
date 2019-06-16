var express = require('express');
const mysql = require('mysql');
var router = express.Router();
const mysqlConfig = require('../mysql-config');
const renderListaProductos = require('../public/productos')

const dbConnection = mysql.createConnection({
  host: mysqlConfig.EnvironmentVariables.host,
  user: mysqlConfig.EnvironmentVariables.user,
  password: mysqlConfig.EnvironmentVariables.password,
  database: mysqlConfig.EnvironmentVariables.database
});

/* GET nosotros listing. */
router.get('/', function(req, res, next) {
  dbConnection.query("SELECT * FROM productos", function (err, productsList, fields) {
    if (err) throw err;
    res.send(renderListaProductos.ListaProductosView(productsList))
  })
} );

module.exports = router;