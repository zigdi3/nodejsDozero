exports.paginaInicial = (req,res, next) => {
res.render('index');
next();

};

//module.exports = {paginaInicial:paginaInicial};