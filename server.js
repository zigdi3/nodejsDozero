
require('dotenv').config();

var port= process.env.PORT||3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {console.log("conectado ao DB")
}).catch( e=> console.log(e))

const routes = require('./src/Routers/routes');
const path = require('path');

//tratamento do frontend
app.use(express.urlencoded( {extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine' , 'ejs');

//rotas da aplicação
app.use(routes);

app.listen(port);
console.log("server rodando em http://localhost:"+port+ " .");