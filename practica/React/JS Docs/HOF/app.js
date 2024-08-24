// FILTER
// filter is a function on the array accepts another functino as its argument to return a new filtered version of the array

var animals = [
    {name:'Fluffykins', species:'rabbit'},
    {name:'Caro', species:'dog'},
    {name:'Hamilton', species:'dog'},
    {name:'Harold', species:'fish'},
    {name:'Ursula', species:'cat'},
    {name:'Jimmy', species:'fish'},
]

//normally we would use a for loop like this:


/**
 
var dogs = []

for (i=0; i<animals.length; i++){
    if(animals[i].species === 'dog'){
        dogs.push(animals[i])
    }
}
*/

//with Filter

var dogs = animals.filter(function(animals){
    return animals.species === 'dog'
})

//lets separate it even further

var isDog = function(animals){
    return animals.species === 'dog'
}

//This one gives us an array of dogs
var dog = animals.filter(isDog)

var otherAnimals = animals.reject(isDog)
//And this one gives us an array of those who are NOT dogs

//This way, we've separated the problem with functional programming