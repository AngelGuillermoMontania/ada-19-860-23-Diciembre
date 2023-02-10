const persona = {
    nombre: "Angel",
    edad: 30,
    provincia: "San Juan",
    pais: "Argentina",
    profesiones: ["Programador", "Albañil", "Carpintero", "Estudiante"],
    vive: true,

}


//console.log(persona.vive)   // FORMA DE ACCEDER AL VALOR CADA PROPIEDAD - MAS USADA
//console.log(persona["vive"])   // FORMA DE ACCEDER AL VALOR CADA PROPIEDAD - MENOS USADA

for (const key in persona) {
    /* console.log(key)
    console.log(persona[key]) */
    console.log(key, ":", persona[key])
}

// FOR IN ---- PARA OBJETOS
// FOR OF ---- PARA ARRAYS pero casi que no se usa nada por que tenemos for comun, while, forEach, filter, map y todos los demas metodos de array