// Header Random Image
let arrayHeaderImages = ["header1", "header2", "header3", "header4"];
let randomImage = arrayHeaderImages[getRandomInt(4)];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createHeaderDOM() {
    const headerImgContainer = document.querySelector(".headercontainer");
    const headerImage = document.createElement("img");
    headerImage.src = `./img/${randomImage}.jpg`;
    headerImage.alt = "This is a header image about a vynil";
    headerImage.classList.add("responsive");
    headerImgContainer.appendChild(headerImage);
}
createHeaderDOM();

// My Collection Cards

// Fetch JSON File
fetch("./data.json")
    .then(response => response.json())
    .then(data => updateCards(data.vinyls));

// Function Update Cards
function updateCards(cards) {
    const cardsContainer = document.querySelector(".cardscontainer");

    cards.forEach((cardResults) => {
        // Create Div for each Card
        const cardsComplete = document.createElement("div");
        cardsComplete.classList.add("cards");
        // Create Div container for Image
        const cardImage = document.createElement("div");
        cardImage.classList.add("cardimage");
        // Insert image in Div
        const imageSource = document.createElement("img");
        imageSource.src = `./img/albums/${cardResults.albumImg}`; imageSource.alt = cardResults.imgAlt;
        imageSource.classList.add("cardimage");
        // Create Div for content
        const content = document.createElement("div");
        content.classList.add("content");
        // Author
        const cardAuthor = document.createElement('p');
        cardAuthor.textContent = `Author : ${cardResults.author}`;
        // Album
        const cardAlbum = document.createElement('p');
        cardAlbum.textContent = `Album : ${cardResults.albumName}`;
        // Year
        const cardYear = document.createElement('p');
        cardYear.textContent = `Year : ${cardResults.year}`;
        // Genre
        const cardGenre = document.createElement('p');
        cardGenre.textContent = `Genre : ${cardResults.genre}`;
        // Append 
        content.append(cardAuthor, cardAlbum, cardYear, cardGenre);
        cardImage.append(imageSource);
        cardsComplete.append(cardImage, content);
        cardsContainer.append(cardsComplete);
    });
}

updateCards();