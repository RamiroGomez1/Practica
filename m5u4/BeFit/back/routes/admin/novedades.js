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


router.get('/borrar/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
      await novedadesModel.deleteNovedad(id);
      res.redirect('/admin/novedades') 
  } catch (error) {
    console.log(error)
    res.render('admin/novedades', {
      layout: 'admin/layout',
      error: true,
      message: 'No se pudo eliminar la novedad'
    })
  }
})

router.get('/editar/:id', async (req, res, next) => {

  try {
      var id = req.params.id;
      var novedad = await novedadesModel.getNovedadesById(id);

      res.render('admin/editar', {
        layout:'admin/layout',
        novedad
      }) 
  } catch (error) {
    console.log(error)
  }
})



router.post('/editar', async (req, res, next) => {
      try {
        var id = req.body.id;
        var obj = {
          titulo: req.body.titulo,
          subtitulo: req.body.subtitulo,
          cuerpo: req.body.cuerpo
        }

        await novedadesModel.editarNovedadById(obj, id);
        res.redirect('/admin/novedades');
      } catch (error) {
        console.log(error)
        res.render('admin/editar', {
          layout: 'admin/layout',
          error: true,
          message:'No se pudo editar la novedad'
        })
      }
})



module.exports = router;