const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const homeRouter = require('./routes/home');
const nosotrosRouter = require('./routes/nosotros');
const productosRouter = require('./routes/productos');
const contactoRouter = require('./routes/contacto');

const dbConnection = require('./db/db_connection');

const app = express();

dbConnection.DatabaseActivation()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

console.log('=================================')
console.log('App running on http://localhost:3000/ \n')
console.log('Routes:')
console.log('http://localhost:3000/home')
console.log('http://localhost:3000/nosotros')
console.log('http://localhost:3000/productos')
console.log('http://localhost:3000/contacto')
console.log('=================================')
console.log('\n')


app.use('/', homeRouter);
app.use('/home', (req, res) => {res.redirect('/');});
app.use('/nosotros', nosotrosRouter);
app.use('/productos', productosRouter);
app.use('/contacto', contactoRouter);



module.exports = app;
