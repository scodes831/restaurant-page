require ('./contact.css');

import waffleContactImage from "./images/contact.jpg";

export function showContactPage() {
    const page = document.getElementById('content');

    const outerContainer = document.createElement('div');
    outerContainer.setAttribute('id', 'contact-container');
    page.appendChild(outerContainer);

    const contactImage = document.createElement('img');
    contactImage.setAttribute('id', 'contact-image');
    contactImage.src = waffleContactImage;
    outerContainer.appendChild(contactImage);

    const infoContainer = document.createElement('div');
    infoContainer.setAttribute('id', 'inner-container');
    outerContainer.appendChild(infoContainer); 

    const addressContainer = document.createElement('div');
    infoContainer.appendChild(addressContainer);
    addressContainer.setAttribute('id', 'address-container');

    const addressStreet = document.createElement('p');
    addressStreet.textContent = "123 Love Waffles Ave";
    addressContainer.appendChild(addressStreet);

    const addressCSZ = document.createElement('p');
    addressCSZ.textContent = "Waffles, MN 55555";
    addressContainer.appendChild(addressCSZ);

    const email = document.createElement('p');
    infoContainer.appendChild(email);
    email.textContent = "wafflemadness@email.com";

    const phone = document.createElement('p');
    phone.textContent = "(888) 888-8888";
    infoContainer.appendChild(phone);
};