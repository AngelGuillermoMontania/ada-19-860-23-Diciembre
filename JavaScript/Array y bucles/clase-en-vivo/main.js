const arr = ["Angel", "Laura", "Sandra", "Ivana", "Adriana"]
//              0        1        2        3
/* 
console.log(arr[0])  // Ingreso a Angel
console.log(arr[1]) // Ingreso a Laura
console.log(arr[4])   // Undefined
console.log(arr[arr.length - 1])  // Acceder al ultimo elemento
 */



/* for (let index = 0; index <= 5; index = index + 1) {
    console.log(index)
} */

/* for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
} */

/* let count = 0
while (count < arr.length) {   // La traduccion de while es "mientras que"
    console.log(arr[count])
    
    count++
} */

function existeNombre (nombre) {
    // recorrer el array, preguntar (if) si el arr[index] === nombre
    // Si es igual retornar true, si no coindice ninguno retornar false

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === nombre) {
            return true
        }
    }
    return false
}

console.log(existeNombre("Adriana"))   // true
console.log(existeNombre("Giordano"))   // false


// PRIMERA REPETICION
// index = 0   MIENTRAS INDEX SEA MENOR O IGUAL A 5 REPETITE
// EJECUTAR LO QUE ESTA ENTRE {}
// MODIFICARA LA VARIABLE LET GRACIAS AL TERCER PARAMETRO index + 1
// index ===== 1

// SEGUNDA REPETICION
// VUELVE A PREGUNTAR INDEX SI ES MENOR O IGUAL A 5, SI ES TRUE REPETITE
// EJECUTAR LO QUE ESTA ENTRE {}
// MODIFICARA LA VARIABLE LET GRACIAS AL TERCER PARAMETRO index + 1
// index ===== 2

// TERCER REPETICION
// VUELVE A PREGUNTAR INDEX SI ES MENOR O IGUAL A 5, SI ES TRUE REPETITE
// EJECUTAR LO QUE ESTA ENTRE {}
// MODIFICARA LA VARIABLE LET GRACIAS AL TERCER PARAMETRO index + 1
// index === 3

// CUARTA REPETICION
// VUELVE A PREGUNTAR INDEX SI ES MENOR O IGUAL A 5, SI ES TRUE REPETITE
// EJECUTAR LO QUE ESTA ENTRE {}
// MODIFICARA LA VARIABLE LET GRACIAS AL TERCER PARAMETRO index + 1
// index === 4

// QUINTA REPETICION
// VUELVE A PREGUNTAR INDEX SI ES MENOR O IGUAL A 5, SI ES TRUE REPETITE
// EJECUTAR LO QUE ESTA ENTRE {}
// MODIFICARA LA VARIABLE LET GRACIAS AL TERCER PARAMETRO index + 1
// index === 5

// SEXTA REPETICION
// VUELVE A PREGUNTAR INDEX SI ES MENOR O IGUAL A 5, SI ES TRUE REPETITE
// EJECUTAR LO QUE ESTA ENTRE {}
// MODIFICARA LA VARIABLE LET GRACIAS AL TERCER PARAMETRO index + 1
// index === 6

// SEPTIMA REPETICION
// VUELVE A PREGUNTAR INDEX SI ES MENOR O IGUAL A 5, SI ES TRUE REPETITE
