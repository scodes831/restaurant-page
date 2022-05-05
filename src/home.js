const homepage = (() {
    const page = document.getElementById('content');

    const nav = document.createElement('nav');
    page.appendChild(nav);

    const navLinks = document.createElement('ul');
    nav.appendChild(navLinks);

    const homeLink = document.createElement('li');
    navLinks.appendChild(homeLink);
    homeLink.textContent = 'Home';

    const aboutLink = document.createElement('li');
    navLinks.appendChild(aboutLink);
    aboutLink.textContent = 'About';

    const menulink = document.createElement('li');
    navLinks.appendChild(aboutLink);
    menulink.textContent = "Menu";

    const contactLink = document.createElement('li');
    navLinks.appendChild(contactLink);
    contactLink.textContent = "Contact";


})();