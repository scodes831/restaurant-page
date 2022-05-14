require ('./about.css');

import wafflesAboutImage from "./images/waffles-about-page.jpg";

export function showAboutPage() {
    const page = document.getElementById('content');

    const aboutContainer = document.createElement('div');
    aboutContainer.setAttribute('id', 'about-container');
    page.appendChild(aboutContainer);

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "Our Restaurant";
    aboutContainer.appendChild(aboutTitle);
    
    const aboutImage = document.createElement('img');
    aboutImage.src = wafflesAboutImage;
    aboutContainer.appendChild(aboutImage);

    const aboutDesc = document.createElement('h2')
    aboutDesc.textContent = "Welcome to Waffle Madness - let the madness begin! Welcome to Waffle Madness - let the madness begin! Welcome to Waffle Madness - let the madness begin! Welcome to Waffle Madness - let the madness begin! Welcome to Waffle Madness - let the madness begin! Welcome to Waffle Madness - let the madness begin!";
    aboutContainer.appendChild(aboutDesc);

}