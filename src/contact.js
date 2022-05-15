require ('./contact.css');

import waffleContactImage from "./images/contact.jpg";

export function showContactPage() {
    const page = document.getElementById('content');

    const outerContainer = document.createElement('div');
    outerContainer.setAttribute('id', 'outer-container');
    page.appendChild(outerContainer);

    const contactImage = document.createElement('img');
    contactImage.src = waffleContactImage;
    outerContainer.appendChild(contactImage);

    const infoContainer = document.createElement('div');
    infoContainer.setAttribute('id', 'info-container');
    outerContainer.appendChild(infoContainer); 

    const addressContainer = document.createElement('div');
    infoContainer.appendChild(addressContainer);
    addressContainer.setAttribute('id', 'address-container');

    const addressStreet = document.createElement('p');
    addressContainer.textContent = "123 Street Name";
    addressContainer.appendChild(addressStreet);

    const addressCSZ = document.createElement('p');
    addressCSZ.textContent = "City, ST 12345";
    addressContainer.appendChild(addressCSZ);

    const email = document.createElement('p');
    infoContainer.appendChild(email);
    email.textContent = "emailaddress@company.com";

    


}