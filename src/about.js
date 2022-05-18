require ('./about.css');

import wafflesAboutImage from "./images/waffles-about-page.jpg";

export function showAboutPage() {
    const page = document.getElementById('content');
    
    const outerContainer = document.createElement('div');
    outerContainer.setAttribute('id', 'outer-about-container');
    page.appendChild(outerContainer);

    const aboutContainer = document.createElement('div');
    aboutContainer.setAttribute('id', 'about-container');
    outerContainer.appendChild(aboutContainer);

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "Our Restaurant";
    aboutContainer.appendChild(aboutTitle);
    
    const aboutImage = document.createElement('img');
    aboutImage.src = wafflesAboutImage;
    aboutContainer.appendChild(aboutImage);

    const aboutDesc = document.createElement('h2')
    aboutDesc.textContent = "Welcome to Waffle Madness - let the madness begin! We are passionate about all things waffles and we have the best waffles in the whole wide world. Come on in and try them for yourself!";
    aboutContainer.appendChild(aboutDesc);

}