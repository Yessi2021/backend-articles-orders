const express = require('express');
const app = express();
const {  getConnect } = require("./src/db")
const cors = require("cors");
const routesArticle = require('./src/routes/article');
const routesOrder = require('./src/routes/order');
require('dotenv').config()

getConnect()

app.use( cors())
app.use(express.json())

app.use('/api', routesArticle )
app.use('/', routesOrder )


app.listen( process.env.PORT ||  4000, () => {
  console.log('Servidor escuchando en el puerto 4000');
});