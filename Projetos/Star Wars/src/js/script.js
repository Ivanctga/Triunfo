
let currentPageUrl = 'https://rickandmortyapi.com/api/character'

window.onload = async () => {
    try {
        await loadCharacters(currentPageUrl);
    } catch (error) {
        console.log(error);
        alert('Erro ao carregar cards');
    }

    const nextButton = document.getElementById('next-button')
    const backButton = document.getElementById('back-button')

    nextButton.addEventListener('click', loadNextPage)
    backButton.addEventListener('click', loadPreviousPage)
    
};

async function loadCharacters(url) {
    const mainContent = document.getElementById('main-content')
    mainContent.innerHTML = ''; // limpar os resultados anteriores.

    try {
        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.results.forEach((Character) => {
            const card = document.createElement("div")
            card.style.backgroundImage = `url(${Character.image})`
            card.className = "cards"

            const charactersNameBG = document.createElement("div")
            charactersNameBG.className = "character-name-bg"

            const characterName = document.createElement("span")
            characterName.className = "character-name"
            characterName.innerText = `${Character.name}`

            charactersNameBG.appendChild(characterName)
            card.appendChild(charactersNameBG)

            card.onclick = () => {
                const modal = document.getElementById("modal")
                modal.style.visibility = "visible"

                const modalContent = document.getElementById("modal-content")
                modalContent.innerHTML = ''

                const characterImage = document.createElement("div")
                characterImage.style.backgroundImage = `url(${Character.image})`                
                characterImage.className = "character-image"

                const name = document.createElement("span")
                name.className = "character-details"
                name.innerText = `Nome: ${Character.name}`

                const characterStatus = document.createElement("span")
                characterStatus.className = "character-details"
                characterStatus.innerText = `Status: ${convertStatus(Character.status)}`

                const species = document.createElement("span")
                species.className = "character-details"
                species.innerText = `Species: ${convertSpecies(Character.species)}`

                const gender = document.createElement("span")
                gender.className = "character-details"
                gender.innerText = `Genero: ${convertGender(Character.gender)}`

                const origin = document.createElement("span")
                origin.className = "character-details"
                origin.innerText = `Origem: ${Character.origin.name}`

                modalContent.appendChild(characterImage)
                modalContent.appendChild(name)
                modalContent.appendChild(characterStatus)
                modalContent.appendChild(species)
                modalContent.appendChild(gender)
                modalContent.appendChild(origin)

            }

            mainContent.appendChild(card)
        });

        const nextButton = document.getElementById('nest-button')
        const backButton = document.getElementById('back-button')

        nextButton.disabled = !responseJson.info.next;
        backButton.disabled = !responseJson.info.prev;

        backButton.style.visibility = responseJson.info.prev? "visible" : "hidden"

        currentPageUrl = url

    } catch (error) {
        alert('Erro ao carregar os cards')
        console.log(error)       
        
    }
}



function hideModal() {
    const modal = document.getElementById("modal")
    modal.style.visibility = "hidden"
}


function convertEyeColor(eyeColor) {
    const cores = {
        blue: "Azul",
        brown: "Castanho",
        green: "Verde",
        yellow: "Amarelo",
        black: "Preto",
        pink: "Rosa",
        red: "Vermelho",
        orange: "LAranja",
        hazel: "Avela",
        unknown: "Desconhecido"
    }

    return cores[eyeColor.toLowerCase()] || eyeColor;
}

function convertStatus(status) {
     return status;
}

function convertSpecies(species) {
    return species
}

function convertGender(gender) {
    return gender
}

async function loadNextPage() {
    if (!currentPageUrl) return;

    try {
        const response = await fetch(currentPageUrl)
        const responseJson = await response.json()

        await loadCharacters(responseJson.info.next)

    } catch (error) {
        console.log(error);
        alert('Erro ao recarregar a próxima página')
        
    }
}

async function loadPreviousPage() {
    if (!currentPageUrl) return;

    try {
        const response = await fetch(currentPageUrl)
        const responseJson = await response.json()

        await loadCharacters(responseJson.info.prev)

    } catch (error) {
        console.log(error);
        alert('Erro ao recarregar a página anterior')
        
    }
}
