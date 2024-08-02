// Objetos literales

const object1 = {
    name: 'Arto Hellas',
    age: 35, 
    education: 'PhD'
}

const object2 = {
    name: 'Full Stack web aplication development',
    level: 'intermediate studies', 
    size: '5'
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov', 
    },
    grades: [ 2, 3, 5, 3], 
    department: 'Stanfors University',
}


//Los valores de las propiedades pueden ser cualquiera

console.log(object1.name)       // se imprime Arto Hellas

const fieldName = 'age'
console.log(object1[fieldName]) // se imprime 35

//Tambien se puede agregar propiedades a un objeto sobre la marcha 
object1.address = 'Helsinki'
object1.['secret number'] = 12341
