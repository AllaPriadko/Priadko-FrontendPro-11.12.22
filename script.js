const getPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(res => res.json())
        .then(res => showPokemons(res.results))
}
getPokemons()
//
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap'
document.body.append(container)

const getImage = (index) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
// console.log(getImage)

const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content')

const buttonClose = document.createElement('button');
buttonClose.innerText = "Close";
buttonClose.style.cursor = "pointer";
buttonClose.style.padding = '10px';

const showPokemons = pokemons => {
    pokemons.forEach((item, index) => {
        const pokemonElem = document.createElement('div');
        pokemonElem.style.width = '25%';
        pokemonElem.style.padding = '10px';
        pokemonElem.style.cursor = 'pointer'
        pokemonElem.innerHTML = `<p>${item.name}</p>`;
        container.append(pokemonElem)

        
        pokemonElem.addEventListener('click', async () => {
            popup.style.visibility = 'visible';
            const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
                .then( res => res.json())
        
            popupContent.innerHTML = `<p> Name: ${pokemonData.name}</p><p>Weight: ${pokemonData.weight}</p> <p>Height: ${pokemonData.height}</p><img src="${getImage(index + 1)}">`;
            popupContent.append(buttonClose)   
        })

    })
}

const buttonCloseclick = (e) => {
    if (e.target === popupContent) {
        return
    }
    popup.style.visibility = "hidden";
}

buttonClose.addEventListener('click', buttonCloseclick)

const popupBody = document.querySelector('.popup__body')
popupBody.addEventListener('click', buttonCloseclick)

           
            