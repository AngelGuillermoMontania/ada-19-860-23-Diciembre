/* if (condicion) {

} else {

} */

//  if  significa   -----   si?
// else  significa ------   si no...
// else if  signifa ------   si no, si?

const colorSemaforo = "ROJO"

if (colorSemaforo.toLowerCase() === "rojo") {
    alert("LINEA 12, NO PUEDES PASAR ESTA EN ROJO")
} else if (colorSemaforo === "amarillo") {
    alert("LINEA 15, PRECAUCION ESTA EN AMARILLO")
} else {
    alert("LINEA 17, PUEDES PASAR POR QUE NO ESTA EN ROJO")
}
// hei, SI el semaforo esta en rojo, no puedes pasar, SI NO, entonces si puedes pasar


/* const edad = -10

if (edad >= 150 || edad < 1) {
    console.log("No podrias tener esa edad")
} else if (edad === 17 || edad === 16) {
    console.log("Puedes pasar, pero con autorizacion de un mayor")
} else if (edad === 18) {
    console.log("Tienes exactamente 18, puedes pasar")
} else if (edad > 18 && edad <= 30) {
    console.log("Puede pasar por que tiene mas de 18")
} else {
    console.log("No puedes pasar, eres menor de edad!!")
} */


// OPERADOR TERNARIO
/* if (condicion) {
    codigo a ejecutar
} else {
    codigo a ejecutar
} */
/* const colorSemaforo = "Rojo"
// condicion ? codigo a ejecutar si es true : codigo a ejecutar si es false
colorSemaforo === "Rojo" ? console.log("NO PASE") : console.log("PASE")
 */



/* if (edad >= 150 || edad < 1) {
    console.log("No podrias tener esa edad")
} else if (edad === 17 || edad === 16) {
    console.log("Puedes pasar, pero con autorizacion de un mayor")
} else if (edad === 18) {
    console.log("Tienes exactamente 18, puedes pasar")
} else if (edad > 18 && edad <= 30) {
    console.log("Puede pasar por que tiene mas de 18")
} else {
    console.log("No puedes pasar, eres menor de edad!!")
} */

/* const edad = 18

switch (Number.isInteger(edad)) {
    case edad >= 150 || edad < 1:
        console.log("No podrias tener esa edad")
        break;
    case edad === 17 || edad === 16:
        console.log("Puedes pasar, pero con autorizacion de un mayor")
        break;
    case edad === 18:
        console.log("Tienes exactamente 18, puedes pasar")
        break;
    case edad > 18 && edad <= 30:
        console.log("Puede pasar por que tiene mas de 18")
        break;
    default:
        console.log("No puedes pasar, eres menor de edad!!")
        break;
} */


/* function puedeEntrar (edad) {
    let puede = ""
    if (edad >= 150 || edad < 1) {
        puede = "No podrias tener esa edad"
    } else if (edad === 17 || edad === 16) {
        puede = "Puedes pasar, pero con autorizacion de un mayor"
    } else if (edad === 18) {
        puede = "Tienes exactamente 18, puedes pasar"
    } else if (edad > 18 && edad <= 30) {
        puede = "Puede pasar por que tiene mas de 18"
    } else if (edad > 30) {
        puede = "No se permiten personas mayores a 30"
    } else {
        puede = "No puedes pasar, eres menor de edad!!"
    }
    return puede
}
 */


/* console.log(puedeEntrar(16))
console.log(puedeEntrar(50))
console.log(puedeEntrar(200))
console.log(puedeEntrar(-25))
console.log(puedeEntrar(19))
 */










const saludo = "Hola, soy Giordano"
console.log(saludo.length)
console.log(saludo.concat(" Como estas?"))
console.log(saludo.replace("Hola", "Chau"))
console.log(saludo.toLowerCase())












/* 
       *** METODOS DE STRING ***
*/
/* let saludo = "Hola, soy Giordano" */

/* console.log(saludo.length) */
/* console.log(saludo.replace("Hola", "Chau")) */
/* console.log(saludo.toLowerCase()) */
/* console.log(saludo.toUpperCase()) */
/* console.log(saludo.concat(", y yo soy Angel")) */
/* console.log("Hola".length) */



/* 
       *** METODOS DE NUMBER ***
*/

/* let num1 = 10.77; */

/* console.log(num1.toString()) */
/* console.log(parseInt(num1)) */
/* console.log(parseInt(Math.random() * 100)) */
/* console.log(Math.floor(num1))  // Redonde hacia abajo
console.log(Math.round(num1))   //Redondea hacia arriba
 */
/* console.log(Number.isInteger(num1)) */



/* METODOS MATEMATICOS */
