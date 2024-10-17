var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'avion',
  resave:false,
  saveUninitialized: true
}))

 // app.use('/users', usersRouter);
 // app.use('/', indexRouter);

  app.get('/', function (req, res) {
    var conocido = Boolean(req.session.nombre)
    var desconocido = Boolean(req.session.nombre)
    var mayorDeEdad = Boolean(req.session.edad >= 13) 
    var menorDeEdad = Boolean(req.session.edad < 13) 
    var mostrarSeccion = conocido && mayorDeEdad


    res.render('index', {
      title: 'Practica de sesiones Express',
      conocido: conocido, //aca aparecera el resultado del booleano (true o false)
      desconocido: desconocido,
      nombre: req.session.nombre,
      mayorDeEdad: mayorDeEdad, 
      menorDeEdad: menorDeEdad, 
      edad: req.session.edad,
      mostrarSeccion: mostrarSeccion
    })
  })



app.post('/ingresar', function (req,res) {
  if(req.body.nombre && req.body.edad //aca capturo el nombre puesto en el input
  ) {
    req.session.nombre = req.body.nombre, //aca asigno el nombre a una nueva variable de sesion 
    req.session.edad = req.body.edad  
  }
  
  res.redirect('/')
})

app.get('/salir', function (req,res) {
  req.session.destroy();
  res.redirect('/');
})








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
