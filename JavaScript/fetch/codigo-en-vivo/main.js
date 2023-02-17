/* function primero () {
    return segundo()
}

function segundo () {
    return tercero()
}

function tercero () {
    return "Hola"
}

console.log(primero())
console.log("Me estoy mostrando despues de la funcion") */
// Asincronico --- Puede hacer varias tareas a la vez
// Sincronico ----  Puede hacer una sola tarea a la vez



/* setInterval(() => {
    console.log("Holaa")
}, 5000) */   // NO SE USA CASI NADA



/* 
fetch// (URL)
    .then(dataEnJSON => {
        return dataEnJSON.json()
    })
    .then(info => {
        //  LO QUE QUIERO HACER CON LA INFORMACION
    })
    .catch( error => {
        return console.log("ERROR")
    })
 */







const $containCharacters = document.querySelector(".contain-characters")
fetch(`https://rickandmortyapi.com/api/character`)
    .then(dataEnJSON => {
        return dataEnJSON.json()
    })
    .then(info => {
        console.log(info)
        // quitar el diamante o el loading
        let characters = info.results
        for (let i = 0; i < characters.length; i++) {
            $containCharacters.innerHTML += `<div class="card">
            <img>
            <p>Nombre</p>
            <p>GENERO</p>
        </div>`
        }
        
    })
    .catch( error => {
        return console.log("ERROR")
    })

console.log("Loading...")