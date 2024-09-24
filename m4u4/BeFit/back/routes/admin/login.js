var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', // aca busca login.hbs
    {
    layout: 'admin/layout' // aca layout.hbs
  });
});

module.exports = router;
