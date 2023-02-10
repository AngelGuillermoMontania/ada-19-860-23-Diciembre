const arr = ["Angel", "Laura", "Sandra"]
const arr2 = [ 5, 10, 15, 8]

/* arr.forEach(nombre => console.log(nombre)) */
const arrayFiltrado = arr2.filter(element => element >= 10)  // [10, 15]
/* console.log(arrayFiltrado) */

const arrayMapeado = arr2.map(element => element * 2) // [10, 20, 30, 16]
/* console.log(arrayMapeado) */

arr.push([6546,847,8, "dhjsag"])
console.log(arr)
arr.pop()
console.log(arr)


/* function saludar(cb) { //callback
    return "Hola" + " " +  cb()
}

console.log(saludar(function () {
    return "Sandra"
})) */

/* function multiplicar (num1, num2) {
    return num1 * num2
} */

/* const multiplicar = (num1, num2) => {
    return num1 * num2
} */ // Caso en el que son dos parametros

/* const multiplicar = num1 => {
    return num1 * 2
} // caso de un parametro */

//const multiplicar = num1 => /* return */ num1 * 2 // Caso en que es una intruccion
/* const multiplicar = num1 => {
    const multiplicacion = num1 * 2
    return multiplicacion
} // caso en que es mas de una instruccion */



/* console.log(multiplicar(5)) */


/* 
Estructura
(parametros) => {
    cosigo a ejecutar
}

* cuando tengo mas de 1 parametro si o si lleva parentesis
* cuando es solo 1 parametro no hace falta colocar los parentesis

* Si tengo una instruccion, no es necesario colocar {}, tengo un return implicito
*/