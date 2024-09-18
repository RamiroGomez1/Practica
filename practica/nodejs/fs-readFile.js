const fs = require('node:fs')

console.log('Leyendo primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err,text) => {
    console.log('primer texto:', text)
})

/* 
Basicamente, le digo que lea el archivo, lo codifique, y que ejecute la funcion cuando termine de leerlo
*/


console.log('Hacer cosas mientras lee el archivo...');


console.log('Leyendo segundo archivo...')
fs.readFile('./archivo2.txt' //que lea el archivo
    , 'utf-8'               //lo codifique

    , (err, text) => {
    console.log('segundo texto:', text)
}                          //que ejecute esta funcion cuando termine de leerlo
)

//callback: funcion que se ejecuta cuando se termina una tarea asincrona