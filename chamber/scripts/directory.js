const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

const business = document.getElementById("business");
const gridButton = document.getElementById("grid");
const listButton = document.getElementById("list");

gridButton.addEventListener('click', () => {
    business.classList.add("grid");
    business.classList.remove("list");
});

listButton.addEventListener('click', () => {
    business.classList.add("list");
    business.classList.remove("grid");
});

const today = new Date()
document.getElementById("currentyear").textContent = today.getFullYear()
document.getElementById("lastmodified").textContent = document.lastModified

async function getMembers() {
    const response = await fetch("data/members.json");
    const members = await response.json();
    const companies = members.companies;

    const businessContainer = document.getElementById("business");
    companies.forEach((company) => {
        const card = document.createElement("article");
        const companyName = document.createElement("h2");
        const companyImage = document.createElement("img");
        const companyAddress = document.createElement("p");
        const companyPhone = document.createElement("p");
        const companyURL = document.createElement("a");
        const companyMember = document.createElement("p");
        const companyDescrip = document.createElement("p");
        companyDescrip.textContent = company.companyDescription;
        if (company.companyMembership == 1) {
            companyMember.textContent = "Member";
        } else if (company.companyMembership == 2) {
            companyMember.textContent = "Silver";
        } else if (company.companyMembership == 3) {
            companyMember.textContent = "Gold";
        }
        companyImage.classList.add("company-image");
        companyMember.classList.add("company-member");
        companyDescrip.classList.add("company-descrip");
        companyURL.textContent = `Website: ${company.companyURL}`;
        companyURL.href = company.companyURL;
        companyURL.target = "_blank";
        companyURL.rel = "noopener";
        companyPhone.textContent = `Phone: ${company.companyPhone}`;
        companyAddress.textContent = `Address: ${company.companyAddress}`;
        companyImage.src = company.companyImage;
        companyImage.alt = company.companyName;
        if (company.companyName === "N&K Storage") {
            companyImage.loading = "eager";
            companyImage.fetchPriority = "high";
        } else {
            companyImage.loading = "lazy";
        }
        companyImage.width = 300;
        companyImage.height = 300;
        companyName.textContent = company.companyName;
        card.appendChild(companyName);
        card.appendChild(companyDescrip);
        card.appendChild(companyImage);
        card.appendChild(companyAddress);
        card.appendChild(companyPhone);
        card.appendChild(companyURL);
        card.appendChild(companyMember);
        businessContainer.appendChild(card);
    });
}

getMembers();