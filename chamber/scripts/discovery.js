const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

const today = new Date()
document.getElementById("currentyear").textContent = today.getFullYear()
document.getElementById("lastmodified").textContent = document.lastModified

import Interest from "../data/chamber.mjs";

const discoverContainer = document.querySelector('#interest');

for (const place of Interest.places) {
    const card = document.createElement("article");
    const heading = document.createElement("h2");
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const address = document.createElement("address");
    const descrip = document.createElement("p");
    const link = document.createElement("button");
    image.setAttribute("src", place.image);
    image.setAttribute("alt", place.name);
    image.setAttribute("loading", "lazy");
    figure.appendChild(image);
    heading.textContent = place.name;
    address.textContent = place.address;
    descrip.textContent = place.description;
    link.textContent = "Learn More";
    card.appendChild(heading);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(descrip);
    card.appendChild(link);
    discoverContainer.appendChild(card);
}

const lastVisit = localStorage.getItem("lastVisit");
const messageContainer = document.querySelector('#visit');
if (lastVisit === null) {
    const message = document.createElement("p");
    message.textContent = "Welcome! Let us know if you have any questions.";
    messageContainer.appendChild(message);
} else {
    const pastVisit = parseInt(lastVisit);
    const timeSince = Date.now() - pastVisit;
    if (timeSince < 86400000) {
        const message = document.createElement("p");
        message.textContent = "Back so soon! Awesome!";
        messageContainer.appendChild(message);
    } else {
        const daysSince = Math.floor(timeSince / 86400000);
        if (daysSince === 1) {
            const message = document.createElement("p");
            message.textContent = `You last visited ${daysSince} day ago.`;
            messageContainer.appendChild(message);
        } else {
            const message = document.createElement("p");
            message.textContent = `You last visited ${daysSince} days ago.`;
            messageContainer.appendChild(message);
        }
    }
}

localStorage.setItem("lastVisit", Date.now());