// Welcome message
const dynamicWelcome = document.querySelector('#welcome-message');

let currentTime = new Date();
let storedTime = localStorage.getItem('pageOpenTime');

if (storedTime) {
    storedTime = new Date(storedTime);
    const timeDifference = currentTime - storedTime;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (timeDifference < 24 * 60 * 60 * 1000) {
        dynamicWelcome.textContent = 'Welcome back!';
    } else {
        dynamicWelcome.textContent = `Welcome back! You last visited ${daysDifference} day${daysDifference > 1 ? 's' : ''} ago.`;
        localStorage.setItem('pageOpenTime', currentTime);
    }
} else {
    localStorage.setItem('pageOpenTime', currentTime);
    dynamicWelcome.textContent = 'Welcome to the discover page, where we will show you some of what the Beartooth Mountains have to offer! To learn more about what you see in the photos, click on the photo of interest for more information.';
}

// getting gallery.json and displaying the photos and captions
const galleryUrl = `https://chapman-jackson.github.io/BeartoothAdventures/data/gallery.json`;
const galleryCard = document.querySelector('#image-container');

const displayResults = (gallery) => {
    galleryCard.innerHTML = ''; // Clear existing content
    gallery.forEach(photoItem => {
        let card = document.createElement('section');
        let caption = document.createElement('h2');
        let image = document.createElement('img');
        let button = document.createElement('button');

        image.setAttribute('src', photoItem.imageURL);
        image.setAttribute('alt', `${photoItem.caption} company logo`);
        image.setAttribute('loading', 'lazy');
        caption.textContent = `${photoItem.caption}`;

        button.appendChild(image);
        button.addEventListener('click', () =>{
            displayPhotoDetails(photoItem);
        })

        card.appendChild(button);
        card.appendChild(caption);
        galleryCard.appendChild(card);
    });
};

async function retrieveData(Url) {
    try {
        const getResponse = await fetch(Url);
        if (getResponse.ok) {
            const info = await getResponse.json();
            console.log(info);
            displayResults(info.gallery);
        } else {
            throw Error(await getResponse.text());
        }   
    } catch(error) {
        console.log("Error fetching data:", error);
    }
}

retrieveData(galleryUrl);

// Allowing the user to filter the photos based on type animal, flower, or geographical location
const defaultGallery = document.querySelector('#default-button');
const animalGallery = document.querySelector('#filter-animal-button');
const flowerGallery = document.querySelector('#filter-flower-button');
const geographicalGallery = document.querySelector('#filter-geographical-button');

// reset gallery to default array
defaultGallery.addEventListener('click', () => {
    retrieveData(galleryUrl);
});

// filter photos without the type "animal"
animalGallery.addEventListener('click', () => {
    filterGallery('animal');
});

// filter photos without the type "flowers"
flowerGallery.addEventListener('click', () => {
    filterGallery('flowers');
});

// filter photos without the type "geographical"
geographicalGallery.addEventListener('click', () => {
    filterGallery('geographical');
});

const filterGallery = (type) => {
    fetch(galleryUrl)
        .then(response => response.json())
        .then(data => {
            const filteredGallery = data.gallery.filter(photoItem => photoItem.type === type);
            displayResults(filteredGallery);
        })
        .catch(error => console.log("Error fetching data:", error));
};

// display modal information that is accessed by clicking on a photo
const photoData = document.querySelector('#gallery-dialogue');

function displayPhotoDetails(photoItem) {
    photoData.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${photoItem.caption}</h2>

    <p>${photoItem.description}</p>
    <p>Impotant to know: ${photoItem.safetyinfo}</p>
    `;
    photoData.showModal();

    document.getElementById("closeModal").addEventListener('click', () => {
        photoData.close();
    });
}