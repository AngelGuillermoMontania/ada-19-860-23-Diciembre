/* function saludar () {
    const nombre = "Angel"
    const saludo = `Hola! ${nombre}`
    return saludo
} */ // DECLARACION DE LA FUNCION

//saludar()  // EJECUCION DE LA FUNCION

/* function nombreYApellido (nombre, apellido) {
    return `Tu nombre es ${nombre} y tu apellido es ${apellido}`
}

function saludar(saludo, cb, anioNacimiento) {
    const edad = 2023 - anioNacimiento
    const saludar = `${saludo}!! ${cb("Angel", "Montaña")}`
    return `${saludar} y tu edad es ${edad} por que naciste en ${anioNacimiento}`
}

console.log(saludar("Hola wei", nombreYApellido, 1992)) */




const nombre = prompt("Ingrese su nombre")
const apellido = prompt("Ingrese su apellido")

function saludar () {
    return alert(`Hola! tu nombre es ${nombre} y tu apellido es ${apellido}`)
}

saludar()