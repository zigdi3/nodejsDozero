const express = require('express');
const route = express.Router();
const home = require("../Controllers/homeController");

//rotas da home
route.get('/', home.paginaInicial);




module.exports = route;

  
  
  
  