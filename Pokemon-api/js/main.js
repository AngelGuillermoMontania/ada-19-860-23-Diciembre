// Donde dibujare las cards
const $containCards = document.querySelector(".contain-cards")

// botones de filtrado
const $filterAll = document.querySelector("#filter-all")
const $filterGrass = document.querySelector("#filter-grass")
const $filterFire = document.querySelector("#filter-fire")
const $filterWater = document.querySelector("#filter-water")
const $filterNormal = document.querySelector("#filter-normal")

// botones de pagina
const $initPage = document.querySelector("#init-page")
const $previousPage = document.querySelector("#previous-page")
const $nextPage = document.querySelector("#next-page")
const $lastPage = document.querySelector("#last-page")

let response;
let totalPokemons
let totalPages;
let allDetailPokemons
let offset = 0   // let page = 1

window.addEventListener("load", () => {

    loadPokemons()
    
})

function loadPokemons () {

    if(offset < 20) {  // page < 2
        $previousPage.classList.add("desactived")
        $initPage.classList.add("desactived")
    } else {
        $previousPage.classList.remove("desactived")
        $initPage.classList.remove("desactived")
    }

    if(offset + 20 > totalPokemons) { // if(page === 42)
        $nextPage.classList.add("desactived")
        $lastPage.classList.add("desactived")
    } else {
        $nextPage.classList.remove("desactived")
        $lastPage.classList.remove("desactived")
    }

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        .then(response => response.json())
        .then(data => {
            response = data
            totalPokemons = data.count
            totalPages = totalPokemons / 20
            // allDetailsCharacters = data.results      ESTO SERIA DE RICK AND MORTY
            // paintCards()


            /* DE AQUI HACIA ABAJO ES EXCLUSIVO DE LA API DE POKEMON */
            let arrayPromises = [];
            data.results.forEach(async pokemon => {
                arrayPromises.push(fetch(pokemon.url))
            });
            Promise.all(arrayPromises)
                .then(response => {
                    allDetailPokemons = response
                    Promise.all(allDetailPokemons.map(responsePokemon => responsePokemon.json()))
                        .then(data => {
                            allDetailPokemons = data
                            paintCards(allDetailPokemons)
                        })
                        .catch(error => console.log(error))
                })
                .catch(error => console.log(error))
            /* DE AQUI HACIA ARRIBA ES EXCLUSIVO DE LA API DE POKEMON */
        })
        .catch(error => console.log(error))
}

function paintCards(array) {
    $containCards.innerHTML = ""
    array.forEach(pokemon => {
        $containCards.innerHTML += `<div class="card">
        <img src=${pokemon.sprites.other.home.front_default} class="img-pokemon">
        <div class="contain-info">
            <p>Name: ${pokemon.name}</p>
            <p>Base Experience: ${pokemon.base_experience}</p>
            <p>Hp: ${pokemon.stats[0].base_stat}</p>
            <p>Atack: ${pokemon.stats[1].base_stat}</p>
            <p>Defense: ${pokemon.stats[2].base_stat}</p>
            <p>Speed: ${pokemon.stats[5].base_stat}</p>
        </div>
        </div>`
    })
}





// -------------           FILTRADO             ----------------

$filterGrass.addEventListener("click", () => {
    // const characterFilters = allDetailCharacter.filter(character => character.gender === LO QUE CORRESPONDA ACA)
    let pokemonFilters = []
    allDetailPokemons.forEach(pokemon => {
        pokemon.types.forEach(typePokemon => {
            if(typePokemon.type.name === "grass") {
                pokemonFilters.push(pokemon)
            }
        })
    })
    paintCards(pokemonFilters)
})

$filterFire.addEventListener("click", () => {
    // const characterFilters = allDetailCharacter.filter(character => character.gender === LO QUE CORRESPONDA ACA)
    let pokemonFilters = []
    allDetailPokemons.forEach(pokemon => {
        pokemon.types.forEach(typePokemon => {
            if(typePokemon.type.name === "fire") {
                pokemonFilters.push(pokemon)
            }
        })
    })
    paintCards(pokemonFilters)
})

$filterWater.addEventListener("click", () => {
    // const characterFilters = allDetailCharacter.filter(character => character.gender === LO QUE CORRESPONDA ACA)
    let pokemonFilters = []
    allDetailPokemons.forEach(pokemon => {
        pokemon.types.forEach(typePokemon => {
            if(typePokemon.type.name === "water") {
                pokemonFilters.push(pokemon)
            }
        })
    })
    paintCards(pokemonFilters)
})

$filterNormal.addEventListener("click", () => {
    // const characterFilters = allDetailCharacter.filter(character => character.gender === LO QUE CORRESPONDA ACA)
    let pokemonFilters = []
    allDetailPokemons.forEach(pokemon => {
        pokemon.types.forEach(typePokemon => {
            if(typePokemon.type.name === "normal") {
                pokemonFilters.push(pokemon)
            }
        })
    })
    paintCards(pokemonFilters)
})

$filterAll.addEventListener("click", () => {
    paintCards(allDetailPokemons)
    // paintCards(allDetailCharacters)
})




// --------------------------- PAGINACION --------------------------------

$nextPage.addEventListener("click", () => {
    if(offset + 20 < totalPokemons) { // if (page < 42)
        offset += 20   // page += 1
        loadPokemons()
    }  
})

$previousPage.addEventListener("click", () => {
    if(offset > 0) {
        offset -= 20   // page -= 1
        loadPokemons()
    }
})

$initPage.addEventListener("click", () => {
    offset = 0   // page = 1
    loadPokemons()
})

$lastPage.addEventListener("click", () => {
    // page = 42
    if(offset + 20 < totalPokemons) {   
        while (offset + 20 < totalPokemons) {
            offset += 20
        }
        loadPokemons()
    }
})