const express = require('express');
const route = express.Router();
const homeController = require('../controllers/homeController');
const loginController = require('../controllers/loginController');

// Rotas da home
route.get('/', homeController.index);


//Rotas do Login
route.get('/login/index', loginController.index);
//route.post('login/register' , loginController.register);


module.exports = route;
