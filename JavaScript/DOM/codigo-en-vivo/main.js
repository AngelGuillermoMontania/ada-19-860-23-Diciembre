/* const $h5 = document.getElementsByTagName("h5") */
/* const $h5 = document.getElementById("title") */
/* const $h5 = document.getElementsByClassName("container") */
/* const $h5 = document.querySelector(".container") */    // Guarda el primero que encuentre
/* const $h5 = document.querySelectorAll("#title") */ // All guarda un array
//   # ---> id      . ----> clase      sin nada ----> etiqueta

/* const $containerTitle = document.querySelector(".container-title") */
/* console.log($containerTitle.innerText) */ // Muestra el texto que tiene dentro
/* console.log($containerTitle.innerHTML) */ // Muestra el HTML que tiene dentro
/* $containerTitle.innerText = "<h2>Este h2 lo agregue con JS</h2>" */
/* $containerTitle.innerHTML = "<h2>Este h2 lo agregue con JS</h2>" */

/* $containerTitle.style.backgroundColor = "#000000"   // Acceder a los estilos uno por uno
$containerTitle.style.color = "#156545" */    // Acceder a los estilos uno por uno

/* $containerTitle.classList.add("dark")  // Agrega la clase Dark
$containerTitle.classList.remove("dark")  // Quita la clase dark
$containerTitle.classList.toggle("dark-mode") */   // Si no existe, agrega y si existe, quita







/* const $btnSuma = document.querySelector("#suma")
const $btnResta = document.querySelector("#resta")
const $count = document.querySelector("#count") */

/* 
    addEventListener recibe dos parametros.
        * El tipo de evento
        * La funcion que quiero ejecutar cuando ocurra ese evento
*/
/* let count = 0
$btnSuma.addEventListener("click", (event) => {
    console.log(event.ctrlKey)
    count += 1
    $count.innerHTML = `El count esta en ${count}`
})

$btnResta.addEventListener("click", (event) => {
    count -= 1
    $count.innerHTML = `El count esta en ${count}`
}) */






const datos = [
    {
        id: 1,
        name: "Angel",
        apellido: "Montaña",
        ciudad: "San Juan",
        profesion: "Programador"
    }, {
        id: 2,
        name: "Pepito",
        apellido: "Honguito",
        ciudad: "Bs As",
        profesion: "Tester QA"
    }, {
        id: 3,
        name: "Maria",
        apellido: "Mancini",
        ciudad: "Tierra Del Fuego",
        profesion: "UX/UI"
    }, {
        id: 4,
        name: "Juan",
        apellido: "Paso",
        ciudad: "Cordoba",
        profesion: "DevOps"
    },
]

const $containCharacters = document.querySelector(".contain-characters")

function paint() {
    datos.forEach(character => {
        $containCharacters.innerHTML += `<div class="contain-card">
            <h4 class="name">Nombre: ${character.name}</h4>
            <p>Apellido: ${character.apellido}</p>
            <p>Ciudad: ${character.ciudad}</p>
            <p>Profesion: ${character.profesion}</p>
        </div>`
    })
}

paint()









/* const $containerCharacters = document.querySelector(".contain-characters")
const $h1Title = document.createElement("h1")
$h1Title.innerText = "Hola soy un h1";
$h1Title.classList.add("titulo")
$containerCharacters.appendChild($h1Title) */