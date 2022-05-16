import { showHomepage } from './home.js';
import { showAboutPage } from './about.js';
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
showHomepage();

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
    homeLink.classList.add('nav-link', 'active');
    homeLink.setAttribute('id', 'home');
    homeLink.textContent = 'Home';

    const aboutLink = document.createElement('li');
    navLinks.appendChild(aboutLink);
    aboutLink.classList.add('nav-link', 'inactive');
    aboutLink.setAttribute('id', 'about');
    aboutLink.textContent = 'About';
    
    const menuLink = document.createElement('li');
    navLinks.appendChild(menuLink);
    menuLink.classList.add('nav-link', 'inactive');
    menuLink.setAttribute('id', 'menu');
    menuLink.textContent = "Menu";
    
    const contactLink = document.createElement('li');
    navLinks.appendChild(contactLink);
    contactLink.classList.add('nav-link', 'inactive');
    contactLink.setAttribute('id', 'contact');
    contactLink.textContent = "Contact";
    
    let userClicks = ["homepage"];
    
    const pages = document.querySelectorAll('.nav-link');
    pages.forEach(page => {
        page.addEventListener('click', e => {
            if (page.classList.contains('active')) {
                console.log("it's already active");
                return;
            } else {
                console.log(userClicks[userClicks.length-1]);
                let currentPage = userClicks[userClicks.length-1];
                if (currentPage === "homepage") {
                    console.log("remove the homepage");
                } else if (currentPage === "about" ) {
                    console.log("remove the about page");
                    removePage();
                    // currentPage.classList.remove('active');
                    // currentPage.classList.add('inactive');
                } else if (currentPage === "menu") {
                    console.log("remove the menu page");
                } else {
                    console.log("remove the contact page");
                }
                console.log("it's not active");
                page.classList.remove('inactive');
                page.classList.add('active');
                userClicks.push(page.id);
                if (page.id === "home") {
                    showHomepage();
                } else if (page.id === "about") {
                    showAboutPage();
                } else if (page.id === "menu") {
                    console.log("this is the menu page");
                } else {
                    console.log("this is the contact page");
                }
                console.log(userClicks);
               

            }
        })
    });

    function removePage() {
        const content = document.getElementById('outer-container');
        content.remove();
    }
        



// function showMenuPage() {
//     console.log("menu page clicked");
//     // const entree1 = new Entree(classicBerryWafflesImage, "Classic Berry Waffles", 6.49, "Classic belgian waffles topped with fresh berries, granola, and whipped cream.");
//     // entree1.addCard();
//     // entree1.addImage();
//     // entree1.addName();
//     // entree1.addPrice();
//     // entree1.addDescription();

//     // const entree2 = new Entree(cherryCheesecakeWafflesImage, "Cherry Cheesecake Waffles", 7.49, "Classic belgian waffles topped with cheesecake filling, cherry topping, and whipped cream.");
//     // const entree3 = new Entree(classicWafflesImage, "Classic Waffles", 4.99, "Classic begian waffles dusted with powdered sugar.");
//     // const entree4 = new Entree(waffleSundaeImage, "Waffle Sundae", 3.99, "Classic belgian waffle with a scoop of homemade vanilla ice cream, topped with chocolate sauce, almonds, and whipped cream.");
//     // const entree5 = new Entree(banNutWafflesImage, "Banana Nut Waffles", 7.49, "Classic belgian waffles topped with sliced bananas, cinnamon, walnuts, and powdered sugar.");
//     // const entree6 = new Entree(chocTurtleWafflesImage, "Chocolate Turtle Waffles", 7.49, "Classic belgian waffles topped with chocolate sauce, caramel sauce, pecans, and whipped cream.")
// };

// function showContactPage() {
//     console.log("contact page clicked");
}