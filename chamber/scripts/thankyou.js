const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

const today = new Date()
document.getElementById("currentyear").textContent = today.getFullYear()
document.getElementById("lastmodified").textContent = document.lastModified

const params = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<h2>This is what we added to your profile</h2>
<p>Your Name: ${params.get('fname')} ${params.get('lname')}</p>
<p>Your Email: ${params.get('email')}</p>
<p>Your Phone: ${params.get('phone')}</p>
<p>Where you work: ${params.get('business')}</p>
<p>When Your submitted your form: ${params.get('timestamp')}</p>`;