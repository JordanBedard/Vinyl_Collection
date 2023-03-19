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

// Fetch JSON Files
function fetchdataCollection() {
    fetch("./dataCollection.json")
        .then(response => response.json())
        .then(data => updateCards(data.vinyls));
}

function fetchdataWl() {
    fetch("./dataWhisList.json")
        .then(response => response.json())
        .then(data => updateCards(data.wishlist));
}

// Function Update Cards Collection
function updateCards(data) {
    const cardsCompleteLayout = document.querySelector(".cardsLayout");

    cardsCompleteLayout.innerHTML = '';

    data.forEach((result) => {
        // Create Div for each Card
        const cardsComplete = document.createElement("div");
        cardsComplete.classList.add("cards");
        // Create Div container for Image
        const cardImage = document.createElement("div");
        cardImage.classList.add("cardimage");
        // Insert image in Div
        const imageSource = document.createElement("img");
        imageSource.src = `./img/albums/${result.albumImg}`; imageSource.alt = result.imgAlt;
        imageSource.classList.add("cardimage");
        // Create Div for content
        const content = document.createElement("div");
        content.classList.add("content");
        // Author
        const cardAuthor = document.createElement('p');
        cardAuthor.textContent = `Author : ${result.author}`;
        // Album
        const cardAlbum = document.createElement('p');
        cardAlbum.textContent = `Album : ${result.albumName}`;
        // Year
        const cardYear = document.createElement('p');
        cardYear.textContent = `Year : ${result.year}`;
        // Genre
        const cardGenre = document.createElement('p');
        cardGenre.textContent = `Genre : ${result.genre}`;
        // Append 
        content.append(cardAuthor, cardAlbum, cardYear, cardGenre);
        cardImage.append(imageSource);
        cardsComplete.append(cardImage, content);
        cardsCompleteLayout.append(cardsComplete);
    });
}

// Using Menu Items

document.querySelector(".btnCollection").addEventListener("click", loadingContentCollection);

function loadingContentCollection() {
    fetchdataCollection();
}

document.querySelector(".btnWishlist").addEventListener("click", loadingContentWhislist);

function loadingContentWhislist() {
    fetchdataWl();
}

// Google chart
/*
src = "https://www.gstatic.com/charts/loader.js"

function drawChart() {

var data = google.visualization.arrayToDataTable([
  ['Genre', 'Number'],
  ['Classic Rock', 55],
  ['Progressive Rock', 49],
  ['Heavy Rock', 44],
  ['Alternative', 24],
  ['Classical', 15],
  ['Jazz', 15],
  ['Funk', 15],
  ['Pop', 15],
  ['Latin', 15],
  ['Hip Hop', 15],
  ['Electronic', 15],
]);

var options = {
  title: 'World Wide Wine Production'
};

var chart = new google.visualization.PieChart(document.getElementById('myChart'));
chart.draw(data, options);
}

*/