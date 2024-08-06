// Podemos asignar métodos a un objeto definiendo propiedades que son funciones:

const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',

    greet: function () {
        console.log('hello, my name is ' + this.name) //this, en este caso, seria 'arto'(arto.name)
    },
}

arto.greet()  // se imprime "hello, my name is Arto Hellas"

//Los métodos se pueden asignar a los objetos incluso después de la creación del objeto:

const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function () {
        console.log('hello, my name is ' + this.name)
    },

    //aca iria el nuevo 'key' llamado growolder
    //growOlder : this.age + 1

}


arto.growOlder = function () {
    this.age += 1
}

console.log(arto.age)   // se imprime 35
arto.growOlder()
console.log(arto.age)   // se imprime 36


const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function () {
        console.log('hello, my name is ' + this.name)
    },

    doAddition: function (a, b) {
        console.log(a + b)
    }

}

arto.doAddition(1, 4)        // se imprime 5

//abreviemoslo
const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)   // se imprime 25


arto.greet()       // se imprime "hello, my name is Arto Hellas"

const referenceToGreet = arto.greet
referenceToGreet() // se imprime "hello, my name is undefined"

//Esto sucede porque this en este caso esta siendo llamado desde un objeto global, en el que name (dentro de greet) no esta definido

setTimeout(arto.greet, 1000)
//En este caso, al ser el metodo setTimeout el que esta llamando al metodo, es el motor de JS el que lo llama, y es en este punto en que this se refiere al objeto global


//Para no perder la referencia de this, se utiliza el metodo bind, en el que podemos indicar a donde apuntar
setTimeout(arto.greet.bind(arto), 1000)
//En este caso usamos bind(arto) para bindear this a el objeto arto, independientemente de donde y como se llame el metodo