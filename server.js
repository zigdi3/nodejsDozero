var port= 3000;
const express = require('express');
const app = express();
const route = require('./Routers/routes.js');
const path = require('path');

app.use(express.urlencoded( {extended: true}));
app.use(route);

app.set('views', './src/views');
app.set('view engine' , 'ejs');
app.listen(port);
console.log("server rodando em http://localhost:"+port+ " .");