import { homepage } from './home.js';
import { Entree } from './menu.js';

import logoImage from './images/logo.png';
console.log("It's working");

import classicWafflesImage from './images/classic-waffles.jpg';
import banNutWafflesImage from './images/banana-nut-waffles.jpg';
import cherryCheesecakeWafflesImage from './images/cherry-cheesecake-waffles.jpg';
import chocTurtleWafflesImage from './images/chocolate-turtle-waffles.jpg';
import classicBerryWafflesImage from './images/classic-berry-waffles.jpg';
import waffleSundaeImage from './images/waffle-sundae.jpg';

const page = document.getElementById('content');

showNavBar();
homepage();

function showNavBar() {
    const nav = document.createElement('nav');
    page.appendChild(nav);

    const logo = document.createElement('img');
    logo.setAttribute('id', 'logo-nav');
    logo.src = logoImage;
    nav.appendChild(logo);

    const navLinks = document.createElement('ul');
    navLinks.setAttribute('id', 'nav-links-container');
    nav.appendChild(navLinks);

    const homeLink = document.createElement('li');
    navLinks.appendChild(homeLink);
    homeLink.classList.add('nav-link');
    homeLink.textContent = 'Home';
    homeLink.addEventListener('click', homepage);

    const aboutLink = document.createElement('li');
    navLinks.appendChild(aboutLink);
    aboutLink.classList.add('nav-link');
    aboutLink.textContent = 'About';
    aboutLink.addEventListener('click', showAboutPage);

    const menuLink = document.createElement('li');
    navLinks.appendChild(menuLink);
    menuLink.classList.add('nav-link');
    menuLink.textContent = "Menu";
    menuLink.addEventListener('click', showMenuPage);

    const contactLink = document.createElement('li');
    navLinks.appendChild(contactLink);
    contactLink.classList.add('nav-link');
    contactLink.textContent = "Contact";
    contactLink.addEventListener('click', showContactPage);
};



function showMenuPage() {
    console.log("menu page clicked");
    // const entree1 = new Entree(classicBerryWafflesImage, "Classic Berry Waffles", 6.49, "Classic belgian waffles topped with fresh berries, granola, and whipped cream.");
    // entree1.addCard();
    // entree1.addImage();
    // entree1.addName();
    // entree1.addPrice();
    // entree1.addDescription();

    // const entree2 = new Entree(cherryCheesecakeWafflesImage, "Cherry Cheesecake Waffles", 7.49, "Classic belgian waffles topped with cheesecake filling, cherry topping, and whipped cream.");
    // const entree3 = new Entree(classicWafflesImage, "Classic Waffles", 4.99, "Classic begian waffles dusted with powdered sugar.");
    // const entree4 = new Entree(waffleSundaeImage, "Waffle Sundae", 3.99, "Classic belgian waffle with a scoop of homemade vanilla ice cream, topped with chocolate sauce, almonds, and whipped cream.");
    // const entree5 = new Entree(banNutWafflesImage, "Banana Nut Waffles", 7.49, "Classic belgian waffles topped with sliced bananas, cinnamon, walnuts, and powdered sugar.");
    // const entree6 = new Entree(chocTurtleWafflesImage, "Chocolate Turtle Waffles", 7.49, "Classic belgian waffles topped with chocolate sauce, caramel sauce, pecans, and whipped cream.")
};

function showAboutPage() {
    console.log("about page clicked");
}

function showContactPage() {
    console.log("contact page clicked");
}



