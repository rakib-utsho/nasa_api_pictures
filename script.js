const resultsNav = document.getElementById('resultsNav');
const favoriteNav = document.getElementById('favoritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');


// NASA API
const count = 5;
const apiKey = '4leTyMsnqUgyS4XBRjauiKP2DSbaOs1TcfpX1NFn';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;


let resultsArray = [];

function updateDOM(){
    resultsArray.forEach((result) => {
        // Card Container
        const card =document.createElement('div');
        card.classList.add('card');
        // link
        const link = document.createElement('a');
        link.href = result.hdurl;
        link. title = 'View Full Image';
        link.target = '_blank';
        // Image
        const image = document.createElement('img');
        image.src = result.url;
        image.alt = 'NASA Picture of the Day';
        image.loading = 'lazy';
        image.classList.add('card-img-top');
        // card Body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        // card title
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = result.title;
        // Save text
        const saveText = document.createElement('p');
        saveText.classList.add('clickable');
        saveText.textContent = 'Add to Favorite ⭐';
        // card text
        const cardText = document.createElement('p');
        cardText.textContent = result.explanation;
        // Footer container
        const footer =document.createElement('small');
        footer.classList.add('text-muted');
        //Date
        const date = document.createElement('strong');
        date.textContent = result.date;
        // Copyright
        const copyrightResult = result.copyright === undefined ? '' : result.copyright;
        // if(result.copyright === undefined){
        //     copyrightResult = '';
        // } else {
        // copyrightResult = result.copyright;
        // }
        const copyright = document.createElement('span');
        copyright.textContent = ` ©${copyrightResult}`;
        // Append
        footer.append(date, copyright);
        cardBody.append(cardTitle, saveText, cardText, footer);
        link.appendChild(image);
        card.append(link, cardBody);
        imagesContainer.appendChild(card);
    }); 
};

//Get 10 Images from NASA API

async function getNasaPicture() {
    try{
        const response = await fetch(apiUrl);
        resultsArray = await response.json();
        console.log(resultsArray);
        updateDOM();
    }catch(error){
        //catch the error
    }
}

// on load
getNasaPicture();