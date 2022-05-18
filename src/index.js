import { showHomepage } from './home.js';
import { showAboutPage } from './about.js';
import { showContactPage } from './contact.js';
import { showMenuPage } from './menu.js';

import logoImage from './images/logo.png';
console.log("It's working");

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
    
    let userClicks = ["home"];
    
    const pages = document.querySelectorAll('.nav-link');
    pages.forEach(page => {
        page.addEventListener('click', e => {
            if (page.classList.contains('active')) {
                console.log("it's already active"); //if the page clicked is already active, do nothing
                return;
            } else {
                console.log(userClicks[userClicks.length-1]);
                let currentPage = userClicks[userClicks.length-1]; //determines page we are currently on
                if (currentPage === "home") { 
                    console.log("remove the home page");
                    homeLink.classList.remove('active');
                    homeLink.classList.add('inactive');
                    removeHomepage();

                } else if (currentPage === "about" ) {
                    console.log("remove the about page");
                    aboutLink.classList.remove('active');
                    aboutLink.classList.add('inactive');
                    removeAboutPage();

                } else if (currentPage === "menu") {
                    console.log("remove the menu page");
                    menuLink.classList.remove('active');
                    menuLink.classList.add('inactive');
                    removeMenuPage();
                } else {
                    console.log("remove the contact page");
                    contactLink.classList.remove('active');
                    contactLink.classList.add('inactive'); //based on current page, set it to inactive and remove page
                    removeContactPage();
                }
                console.log("it's not active");
                page.classList.remove('inactive');
                page.classList.add('active');
                userClicks.push(page.id); //set the clicked page to active and log click in array
                if (page.id === "home") {
                    showHomepage();
                } else if (page.id === "about") {
                    showAboutPage();
                } else if (page.id === "menu") {
                    showMenuPage();
                } else {
                    console.log("this is the contact page"); //load the correct page by page id
                    showContactPage();
                }
                console.log(userClicks);
               
                //can click multiple times except once click on homepage
                //you can't click on any other page -- why?
            }
        })
    });

    function removeContactPage() {
        const content = document.getElementById('contact-container');
        content.remove();
    };

    function removeHomepage() {
        const content = document.getElementById('content-container');
        content.remove();
    };

    function removeAboutPage() {
        const content = document.getElementById('outer-about-container');
        content.remove();
    };

    function removeMenuPage() {
        const content = document.getElementById('cards-container');
        content.remove();
    }
};