var hoy = new Date()
console.log( 'Hoy es ' + hoy)

var i 
for(i=0 ; i<10 ; i++) {
    console.log(i)
}

app.METHOD(PATH, HANDLER)


/*
app es una instancia de la applicacion
method es el metodo de solicitud HTTP
path es la ruta especifica de acceso al servidor en la que se debe ejecutar el codigo de handler
handler es la funcion que se va a ejecutar y que maneja la solicitud y la respuesta
*/


const express = require('express'); // Importar Express
const app = express(); // Crear una instancia de la aplicación

app.get('/'// definicion de ruta
    , function(req,res)//funcion 
     {
    res.send('Hola Mundo')
})

