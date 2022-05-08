require('./home.css');

import wafflesImage from './images/waffles.jpg';
import wImage from './images/w.png';
import aImage from './images/a.png';
import fImage from './images/f.png';
import lImage from './images/l.png';
import eImage from './images/e.png';
import mImage from './images/m.png';
import dImage from './images/d.png';
import nImage from './images/n.png';
import sImage from './images/s.png';
 
 export function homepage() {
    const page = document.getElementById('content');
    
    //NAV BAR
    const nav = document.createElement('nav');
    page.appendChild(nav);

    const navLinks = document.createElement('ul');
    navLinks.setAttribute('id', 'nav-links-container');
    nav.appendChild(navLinks);

    const homeLink = document.createElement('li');
    navLinks.appendChild(homeLink);
    homeLink.classList.add('nav-link');
    homeLink.textContent = 'Home';

    const aboutLink = document.createElement('li');
    navLinks.appendChild(aboutLink);
    aboutLink.classList.add('nav-link');
    aboutLink.textContent = 'About';

    const menuLink = document.createElement('li');
    navLinks.appendChild(menuLink);
    menuLink.classList.add('nav-link');
    menuLink.textContent = "Menu";

    const contactLink = document.createElement('li');
    navLinks.appendChild(contactLink);
    contactLink.classList.add('nav-link');
    contactLink.textContent = "Contact";

    //RESTAURANT TITLE
    const titleRow1 = document.createElement('div');
    titleRow1.classList.add('restaurant-name', 'row-two');
    page.appendChild(titleRow1);

    const titleRow2 = document.createElement('div');
    titleRow2.classList.add('restaurant-name', 'row-two')
    page.appendChild(titleRow2);

    const wIcon = document.createElement('img');
    wIcon.classList.add('letter');
    wIcon.src = wImage;
    titleRow1.appendChild(wIcon);

    const aIcon = document.createElement('img');
    aIcon.classList.add('letter');
    aIcon.src = aImage;
    titleRow1.appendChild(aIcon);

    const fIcon = document.createElement('img');
    fIcon.classList.add('letter');
    fIcon.src = fImage;
    titleRow1.appendChild(fIcon);

    const fIcon2 = document.createElement('img');
    fIcon2.classList.add('letter');
    fIcon2.src = fImage;
    titleRow1.appendChild(fIcon2);

    const lIcon = document.createElement('img');
    lIcon.classList.add('letter');
    lIcon.src = lImage;
    titleRow1.appendChild(lIcon);

    const eIcon = document.createElement('img');
    eIcon.classList.add('letter');
    eIcon.src = eImage;
    titleRow1.appendChild(eIcon);

    const mIcon = document.createElement('img');
    mIcon.classList.add('letter');
    mIcon.src = mImage;
    titleRow2.appendChild(mIcon); 

    const aIcon2 = document.createElement('img');
    aIcon2.classList.add('letter');
    aIcon2.src = aImage;
    titleRow2.appendChild(aIcon2);
    
    const dIcon = document.createElement('img');
    dIcon.classList.add('letter');
    dIcon.src = dImage;
    titleRow2.appendChild(dIcon);

    const nIcon = document.createElement('img');
    nIcon.classList.add('letter');
    nIcon.src = nImage;
    titleRow2.appendChild(nIcon);

    const eIcon2 = document.createElement('img');
    eIcon2.classList.add('letter');
    eIcon2.src = eImage;
    titleRow2.appendChild(eIcon2);

    const sIcon = document.createElement('img');
    sIcon.classList.add('letter');
    sIcon.src = sImage;
    titleRow2.appendChild(sIcon);

    const sIcon2 = document.createElement('img');
    sIcon2.classList.add('letter');
    sIcon2.src = sImage;
    titleRow2.appendChild(sIcon2);

    //MAIN IMAGE
    const imageMain = document.createElement('img');
    imageMain.setAttribute('id', 'main-image');
    imageMain.src = wafflesImage;
    page.appendChild(imageMain);

    //INFO SECTION

    //HOURS
    const hoursContainer = document.createElement('div');
    hoursContainer.setAttribute('id', 'hours-container');
    page.appendChild(hoursContainer);

    const hoursHeading = document.createElement('h2');
    hoursHeading.classList.add('heading');
    hoursHeading.textContent = "Hours of Operation";
    hoursContainer.appendChild(hoursHeading);

    const hoursInnerContainer = document.createElement('div');
    hoursInnerContainer.setAttribute('id', 'hours-inner-container');
    hoursContainer.appendChild(hoursInnerContainer);

    const daysContainer = document.createElement('div');
    daysContainer.setAttribute('id', 'days-container');
    hoursInnerContainer.appendChild(daysContainer);

    const daysList = document.createElement('ul');
    daysList.setAttribute('id', 'days-list');
    daysContainer.appendChild(daysList);

    const sunday = document.createElement('li');
    daysList.appendChild(sunday);
    sunday.textContent = "Sunday";

    const monday = document.createElement('li');
    daysList.appendChild(monday);
    monday.textContent = "Monday";

    const tuesday = document.createElement('li');
    daysList.appendChild(tuesday);
    tuesday.textContent = "Tuesday";

    const wednesday = document.createElement('li');
    daysList.appendChild(wednesday);
    wednesday.textContent = "Wednesday";

    const thursday = document.createElement('li');
    daysList.appendChild(thursday);
    thursday.textContent = "Thursday";

    const friday = document.createElement('li');
    daysList.appendChild(friday);
    friday.textContent = "Friday";

    const saturday = document.createElement('li');
    daysList.appendChild(saturday);
    saturday.textContent = "Saturday";

    const timesContainer = document.createElement('div');
    timesContainer.setAttribute('id', 'times-container');
    hoursInnerContainer.appendChild(timesContainer);

    const timesList = document.createElement('ul');
    timesContainer.appendChild(timesList);

    const sunTimes = document.createElement('li');
    timesList.appendChild(sunTimes);
    sunTimes.textContent = "8 AM to 6 PM"

    const monTimes = document.createElement('li');
    timesList.appendChild(monTimes);
    monTimes.textContent = "8 AM to 7 PM"

    const tuesTimes = document.createElement('li');
    timesList.appendChild(tuesTimes);
    tuesTimes.textContent = "8 AM to 7 PM"

    const wedTimes = document.createElement('li');
    timesList.appendChild(wedTimes);
    wedTimes.textContent = "8 AM to 7 PM"

    const thursTimes = document.createElement('li');
    timesList.appendChild(thursTimes);
    thursTimes.textContent = "8 AM to 7 PM"

    const friTimes = document.createElement('li');
    timesList.appendChild(friTimes);
    friTimes.textContent = "8 AM to 10 PM"

    const satTimes = document.createElement('li');
    timesList.appendChild(satTimes);
    satTimes.textContent = "8 AM to 10 PM"

    
    //SPECIALS
    const specialsContainer = document.createElement('div');
    specialsContainer.setAttribute('id', 'specials-container');
    page.appendChild(specialsContainer);

    const specialsHeading = document.createElement('h2');
    specialsHeading.classList.add('heading');
    specialsHeading.textContent = "Daily Specials";
    specialsContainer.appendChild(specialsHeading);

    const specialsList = document.createElement('ul');
    specialsContainer.appendChild(specialsList);

    const specialsItem1 = document.createElement('li');
    specialsItem1.classList.add('specials-item');
    specialsContainer.appendChild(specialsItem1);
    specialsItem1.textContent = "Daily Special 1"

    const specialsItem2 = document.createElement('li');
    specialsItem2.classList.add('specials-item');
    specialsContainer.appendChild(specialsItem2);
    specialsItem2.textContent = "Daily Special 2"

    const specialsItem3 = document.createElement('li');
    specialsItem3.classList.add('specials-item');
    specialsContainer.appendChild(specialsItem3);
    specialsItem3.textContent = "Daily Special 3"

    const specialsItem4 = document.createElement('li');
    specialsItem4.classList.add('specials-item');
    specialsContainer.appendChild(specialsItem4);
    specialsItem4.textContent = "Daily Special 4"

    //FOOTER
    const footer = document.createElement('footer');
    page.appendChild(footer);
    const footerText = document.createElement('h4');
    footer.appendChild(footerText);
    footerText.textContent = "footer placeholder text goes here";

};