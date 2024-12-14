//Copyright code
const currentyear = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");

const currentDate = new Date();
const lastModifiedDate = new Date(document.lastModified);

currentyear.innerHTML = `©<span class="highlight">${currentDate.getFullYear()} Jackson T. Chapman United States of America</span>`;

lastModified.textContent = `Last Update: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;

//Hamburger button code
const hamButton = document.querySelector('#hamburger-button');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});