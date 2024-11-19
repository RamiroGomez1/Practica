var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
const { route } = require('./login');

/* GET novedades page. */
router.get('/', async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();
  
  res.render('admin/novedades', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    novedades
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
})

router.post('/agregar' //cuando el boton para agregar sea presionado, que se ejecute esta funcion
  , async (req, res, next) => {
  try {
    if(req.body.titulo != '' && req.body.subtitulo != '' && req.body.cuerpo != '') // Si todos los campos de la nueva novedad estan completos, haz lo siguiente
     {
      await novedadesModel.insertNovedad(req.body);// mete la info de la novedad nueva en insertNovedad como objeto
      res.redirect('/admin/novedades') //mandame a la pagina de novedades ya con mi novedad nueva puesta
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    })
  }
})

module.exports = router;
