//map is a function that takes an array as parameter, but instead of taking values out of it, it modifies them

var animals = [
    {name:'Fluffykins', species:'rabbit'},
    {name:'Caro', species:'dog'},
    {name:'Hamilton', species:'dog'},
    {name:'Harold', species:'fish'},
    {name:'Ursula', species:'cat'},
    {name:'Jimmy', species:'fish'},
]

// with for loop we would do this to create an array with the animals names:

/*
var names = []
for (var i = 0; i< animals.length; i++){
    names.push(animals[i].name)
}
 */


//now with map & arrow function

var names = animals.map((x)=> x.name + 'is a' + animal.species)
