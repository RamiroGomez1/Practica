// Repaso

//map will take an array and transform that into an array of the same length but with each individual item transformed
//filter transforms an array into a smaller array
//reject does the same as filter but invertedly
//find does the same as filter but only returns the first item, transforming an array into a single item

var orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325},
]

//with traditional for loop:
var totalAmount1 = 0
for (var i=0; i < orders.length;i++){
    totalAmount += orders[i].amount
}

//logs 1075 ; the sum of all amounts

//with Reduce: 
var totalAmount = orders.reduce((sum, order)=> sum + order.amount, 0) 
//0 (is the second argument of the callback) is the starting point
//logs 1075

//Syntax
var sumExample = array.reduce((accumulator, currentaValue)=>accumulator + currentValue, initialValue)
//El accumulator acumula el valor devuelto por la función callback. Es el valor acumulado devuelto en la última invocación de callback, o el valorInicial, si se proveyó
//currentValue es el elemento actual que está siendo procesado en el array.
//initialValue es el primer argumento en la primera llamada de la función callback

