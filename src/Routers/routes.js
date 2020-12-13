const express = require('express');
const router = express.Router();
const homeController = require("../Controllers/homeController");

//rotas da home
router.get('/', homeController.paginaInicial);




module.exports = router;

  
  
  
  