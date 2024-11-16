var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');
const { log } = require('util');
const { error } = require('console');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', // aca busca login.hbs
    {
      layout: 'admin/layout' // aca layout.hbs
    });
});

router.post('/', async (req, res, next) => {
  try {
    var user = req.body.usuario; // captura la informacion (username)
    var password = req.body.password; // captura la contraseña

    console.log("Username:", req.body.usuario);
    console.log("Password:", req.body.password);


    var data = await usuariosModel.getUserByUsernameAndPassword(user, password) //se envia la info guardada en los vars usuario y password



    if (data != undefined) { //si tengo un registro
      res.redirect('/admin/novedades') //redireccioname a la nueva pagina (/admin/novedades)
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
