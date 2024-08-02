const t = [1, -1, 3]   // Si bien esta definido como const, el contenido del array puede cambiar. Lo que no puede  cambiar es a lo que apunta la constante t, un array (objeto)

t.push(5)

console.log(t.length)  // se imprime 4

console.log(t[1])      // se imprime -1 

t.forEach(value => {
    console.log(value) // se imprimen los numeros 1, -1, 3, 5
})



// Una forma de iterar a través de los elementos del array es usar forEach como se ve en el ejemplo
// forEach recibe una función definida usando la sintaxis de flecha como parámetro.

value => {
    console.log(value)
}
// forEach llama a la función para cada uno de los elementos del array, siempre pasando el elemento individual como parámetro.



// En React, en lugar de usar el metodo push, se utiliza el concat
// Este basicamente hace lo mismo pero en lugar de empujar el valor al array, crea otro con el mismo contenido + el nuevo valor empujado
const t2 = t.concat(5) // crea un nuevo array

console.log(t) // se imprime [1, -1, 3]
console.log(t2) // se imprime [1, -1, 3, 5]


// Metodo map()
const th = [1, 2, 3]

const m1 = th.map(value => value * 2)
console.log(m1)  // se imprime [2, 4, 6]

//map crea un nuevo array, para el que la funcion dada como parametro se usa
//para crear los elementos. En este multiplico los valores del array por 2

//map puede darle otras funcionalidades a los valores del array

const m2 = t.map(value => '<li>' + value + '</li>')

console.log(m2)     // se imprime ['<li>1</li>', '<li>2</li>', '<li>3</li>']


//deestructuring assignment

const y = [1, 2, 3, 4, 5]

const [first, second, ...rest] = y
// las variables first y second recibirán los dos primeros enteros del array como sus valores
console.log(first, second) // se imprime 1, 2

// El resto se recopila en un array propio que se asigna a la variable rest
console.log(rest)          // se imprime [3, 4, 5] 