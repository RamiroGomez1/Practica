const sum = (p1, p2) => { 
    console.log (p1) 
    console.log (p2) 
    return p1 + p2 
  } 

  const result = sum(1,5)
  console.log(result) //imprime 6


  //Si es solo un parametro podemos saltear los parentesis
  const square = p => {
    console.log(p)
    return p * p
  }
//Si la funcion tiene una sola expresion las llaves no son necesarias
  const square = p => p * p

  const t = [1, 2, 3]
const tSquared = t.map(p => p * p)  // tSquared ahora es [1, 4, 9]


//Hay 2 formas de hacer referencia a la funcion, una es dando un nombre en la declaracion de la funcion
function product(a, b) {
    return a * b
  }
  
  const result = product(2, 6)      // result ahora es 12


//La otra es usando una expresion de funcion
const average = function(a, b) {
    return (a + b) / 2
  }
  
  const result = average(2, 5)
  // result ahora es 3.5