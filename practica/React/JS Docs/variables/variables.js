const x = 1
let y = 5

console.log(x, y)   // se imprime 1, 5

y += 10
console.log(x, y)   // se imprime 1, 15

y = 'sometext'
console.log(x, y)   // se imprime 1, sometext

x = 4               // provoca un error

var condicion = true;
        if(condicion){
            var edad1 = 25;
            let edad2 = 32;
        }
        console.log(edad1); // 25
        console.log(edad2); // Error: edad2 is not defined