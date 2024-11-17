var express = require('express');
var router = express.Router();

/* GET novedades page. */
router.get('/novedades', (req, res, next) => {
  res.render('admin/novedades', {
    layout: 'admin/novedades',
  });
});

module.exports = router;
