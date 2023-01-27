//console.log("Hola") //me permite imprimir por consola

/* ==========================
        DATOS PRIMITIVOS
==========================   */

    /* String o texto */

    // console.log('Hello')
    // console.log("Hello")
    // console.log("70")
    // console.log("Hola alumnas!")
    //console.log("Hola" + " " + "alumnas!") // concatenar string
    
    
    
    /* Number o Numero  */
    // console.log(70)
    // console.log(15080070) 
    // console.log(0)
    // console.log(-5)
    //console.log(10 + 5)
    

    //console.log("Hola" + 7)   // Conversion de datos
    //         ("Hola" + "7")
    //         (  "Hola7"   )

    /* Boolean */
    // console.log(true)   //1   //Encendido
    // console.log(false)  //0   //Apagado

    // console.log("true")
    // console.log("false")

    /* Null */
    //console.log(null)  //Existe pero no tiene valor
   
    /* Undefined */
    //console.log(undefined)    //No existe y no tiene valor
   
    /*  typeof */
   // console.log(typeof 40)
   // console.log(typeof true)


/* ==========================
    VARIABLES
========================== */

/* var saludo = "Hola"
var nombre = "Angel"
console.log(saludo + " " + nombre) */

/*    let y const     */

// let saludo = "Hello"
// //let es una variable, mas debil que puedo modificar
// saludo = 10
// console.log(saludo)


// const nroTarjeta = 54544112465
// const es una variable, no se puede modificar






/* ==========================
OPERADOR DE ASIGNACIÓN
========================== */

// El operador "=" sirve para asignar un valor

/* let edad = 40 */



/* ==========================
OPERADORES ARITMÉTICOS
========================== */

// Nos permiten hacer operaciones matemáticas
/* 
10 + 15 //---> Suma      25
10 - 15 //---> Resta     -5
10 * 15 //---> Multiplicación   150
10 / 15 //---> División    0.6666666
15 % 5  //---> Módulo. El resto obtenido de dividir 15 entre 5: 0
15 % 2  //---> Módulo. El resto obtenido de dividir 15 entre 2: 1
14 % 2  //---> Módulo. El resto obtenido de dividir 14 entre 2: 0
 */





/* ==========================
OPERADORES DE COMPARACIÓN SIMPLE
se declara ==, !=
========================== */
/* 
10 == 15 //---> Igualdad
10 != 15 //---> Desigualdad
 */

// console.log(10 != 10)




/* ==========================
OPERADORES DE NEGACION
!
========================== */

/*    !   Simbolo de negacion   */
// console.log(!true)






/* ==========================
OPERADORES DE COMPARACIÓN ESTRICTA
se declara ===, !==
========================== */
/* 
10 === 15 //---> Estrictamente igual (mismo valor y tipo de dato)
10 !== 15 //---> Compara si los operandos no son iguales y/o no del mismo tipo
 */
//console.log(10 !== 10)

/* ==========================
OPERADORES RELACIONALES
========================== */
/* 
15 > 10  //---> Mayor que...
15 >= 10  //---> Mayor o igual que...
15 < 10  //---> Menor que...
15 <= 10  //---> Menor o igual que...
 */

//console.log(10 <= 10)



/* ==========================
OPERADORES LÓGICOS
and  -----> && ----> y
or   -----> || ----> o
========================== */

// Permiten combinar valores booleanos y su resultado a la vez también es un booleano

// && Todos sus valores deben evaluar como TRUE
/* (10 > 15) && (10 != 20) //--->  */
//console.log(10 > 15 && 10 != 20)



//console.log("Hola" === "Hola" && 75 >= 75)


// || (OR) Solo un valor debe evaluar como TRUE para que la expresión sea TRUE

10 > 15 || 10 != 20 //---> TRUE porque 10 != 20 es verdadero
//   true



// console.log("Hola" !== "Hola" || 5 === "5")
//                false       ||    false
//                          false

//("10" === 10 || 25 >= 15) && ("Hola" !== "hola" && true === true)
//  (   false || true    ) && (     true && true)
//       true              &&       true
//                       true



/* ==========================
Template Strings
``
========================== */

// const saludo = "Hola"
// const nombre = "Angel"
// console.log(`${saludo}! ${nombre} Montaña`)

/* Null */

//console.log(null)  //Existe pero no tiene valor
/* let nuevaVariable = null
console.log(nuevaVariable) */


/* Undefined */
//console.log(undefined)    //No existe y no tiene valor
/* let nuevaVariable
console.log(nuevaVariable) */




/* console.log(22 >= "22") */


/* let color = 'Verde';
let noEsRojo = !(color == 'Rojo'); */
//             !(       false   )
//              true

/* console.error("Un nuevo error") */
/* console.log(noEsRojo) */

    /* console.log(5 == "5")
    console.log(5 === "5") */
    /* console.log(5 == "7") */ //false
    /* console.log("5" !== 5) */

    /* console.log("hello " + 5) */            
    /* =======>   Convierte el 5 que esta del tipo number a tipo string */


    //console.log(1 == true)
    //console.log(undefined == null)
    //console.log(undefined === null)

    //console.log(hello)


/* console.log("FUNCIONO PERFECTO, ME LINKIE") */

/* ALERT, PROMPT y CONFIRM */

// El alert solo da un mensaje y debo aceptar para continuar
// El prompt pide informacion y puedo guardarlos. Y escribirle
// El confirm puedo seleccionar si o no

//alert("Hace click aca para ganar un millon de dolares?")
/* const datosDeRobo = prompt("Dame tu dni y cbu y te paso 5 millones de dolares?")
console.log(datosDeRobo) */
/* const edad = prompt("Cual es tu edad?")   //Siempre guarda string  "50"   NO 50
console.log(edad) */
const cualquiera = confirm("djskhadsalkjdas")
console.log(cualquiera)