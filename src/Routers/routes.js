const express = require('express');
const router = express.Router();
const homeController = require("../Controllers/homeController");

//rotas da home
router.get('/', homeController.paginaInicial, function(req,res, next) 
{console.log("rodei a funcao do get");
});

module.exports = router;

  
  
  
  