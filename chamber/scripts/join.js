const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

const timestamp = document.querySelector('#datetime');
const now = new Date();
timestamp.value = now;

const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

const npLink = document.querySelector('a[href="#np-modal"]');
const npModal = document.querySelector('#np-modal');
const brzLink = document.querySelector('a[href="#bronze-modal"]');
const brzModal = document.querySelector('#bronze-modal');
const slvLink = document.querySelector('a[href="#silver-modal"]');
const slvModal = document.querySelector('#silver-modal');
const gldLink = document.querySelector('a[href="#gold-modal"]');
const gldModal = document.querySelector('#gold-modal');

npLink.addEventListener('click', (event) => {
    event.preventDefault();
    npModal.showModal();
});

brzLink.addEventListener('click', (event) => {
    event.preventDefault();
    brzModal.showModal();
});

slvLink.addEventListener('click', (event) => {
    event.preventDefault();
    slvModal.showModal();
});

gldLink.addEventListener('click', (event) => {
    event.preventDefault();
    gldModal.showModal();
});

const closeModal = document.querySelectorAll('.close-modal');

closeModal.forEach((button) => {
    button.addEventListener('click', () => {
        const dialog = button.closest('dialog');
        dialog.close();
    });
});