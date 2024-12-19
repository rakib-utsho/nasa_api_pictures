const resultsNav = document.getElementById('resultsNav');
const favoriteNav = document.getElementById('favoritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');


// NASA API
const count = 10;
const apiKey = '4leTyMsnqUgyS4XBRjauiKP2DSbaOs1TcfpX1NFn';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;


let resultsArray = [];
let favorites = {};

function showContent (page) {
    window.scrollTo({ top:0, behavior:'instant'});
    if(page === 'results') {
        resultsNav.classList.remove('hidden');
        favoriteNav.classList.add('hidden');
    }else{
        resultsNav.classList.add('hidden');
        favoriteNav.classList.remove('hidden'); 
    }
    loader.classList.add('hidden');
}

function createDOMNodes(page){
    const currentArray = page === 'results' ? resultsArray : Object.values(favorites);
    currentArray.forEach((result) => {
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
        if(page === 'results'){
            saveText.textContent = 'Add to Favorite ⭐';
            saveText.setAttribute('onclick', `saveFavorite('${result.url}')`);
        }else{
            saveText.textContent = 'Remove Favorite';
            saveText.setAttribute('onclick', `removeFavorite('${result.url}')`);
        }
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
}

function updateDOM(page){
    // Get favorite from local storage
    if(localStorage.getItem('nasaFavorites')){
        favorites = JSON.parse(localStorage.getItem('nasaFavorites'));
    }
    imagesContainer.textContent = '';
    createDOMNodes(page);
    showContent(page);
};

//Get 10 Images from NASA API

async function getNasaPicture() {
    // Show the loader
    loader.classList.remove('hidden');
    try{
        const response = await fetch(apiUrl);
        resultsArray = await response.json();
        console.log(resultsArray);
        updateDOM('results');
    }catch(error){
        //catch the error
    }
}

// add result to favorite
function saveFavorite(itemUrl) {
    // Loop through results Array to select Favorite
    resultsArray.forEach((item)=> {
        if(item.url.includes(itemUrl) && !favorites[itemUrl]){
            favorites[itemUrl] = item;
            // Show Save Confirmation for 2 seconds
            saveConfirmed.hidden = false;
            setTimeout(()=>{
                saveConfirmed.hidden = true;
            }, 2000);
            // set favorites in local storage
            localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
        }

    });
}

// Remove Favorite function
 function removeFavorite(itemUrl){
    if(favorites[itemUrl]){
        delete favorites[itemUrl];
        // set favorites in local storage
        localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
        updateDOM('favorites');
    }
 }

// on load
getNasaPicture();