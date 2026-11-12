const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

const today = new Date()
document.getElementById("currentyear").textContent = today.getFullYear()
document.getElementById("lastmodified").textContent = document.lastModified

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherCaption = document.querySelector('.weather figcaption');
const forecast = document.querySelector('#forecast');
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.74&lon=-104.99&appid=53a8e8f5c2ceeb39ebdcde0014e3f179&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
      console.log(data.list); // uncomment when ready
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

function displayResults(data) {
    const temp = data.list[0].main.temp;
    currentTemp.innerHTML = `${temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    const descrip = data.list[0].weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', descrip);
    weatherCaption.textContent = `${descrip}`;
    const forecastDays = [];
    for (let i = 0; i < data.list.length; i++) {
        const forecast = data.list[i];

        if (forecast.dt_txt.includes("12:00:00")) {
        forecastDays.push(forecast);
        }
    }
    const threeDayForecast = forecastDays.slice(0, 3);
    //console.log(threeDayForecast);
    forecast.innerHTML = "";

    threeDayForecast.forEach((day) => {
        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString("en-us", { weekday: "long"});
        const temperature = day.main.temp;

        forecast.innerHTML += `
            <div>
                <h4>${dayName}</h4>
                <p>${temperature}&deg;F</p>
            </div>
        `;
    });
};

apiFetch();

const businessSpotlight = document.querySelector('#business-sl');
async function getSpotlights() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    const companies = data.companies;
    const eligbleCompanies = companies.filter(company => company.companyMembership === 2 || company.companyMembership === 3);
    const shuffled = eligbleCompanies.sort(() => 0.5 - Math.random());
    const spotlights = shuffled.slice(0, 2);
    let membership = "";
    businessSpotlight.innerHTML = "";
    spotlights.forEach((company) => {
        if (company.companyMembership === 2) {
            membership = "Silver";
        } else if (company.companyMembership === 3) {
            membership = "Gold";
        }
        businessSpotlight.innerHTML += `
            <article>
                <h3>${company.companyName}</h3>
                <img src="${company.companyImage}" alt="${company.companyName} logo">
                <p>${company.companyPhone}</p>
                <p>${company.companyAddress}</p>
                <a href="${company.companyURL}" target="_blank">Visit Website</a>
                <p>Membership: ${membership}</p>
            </article>
        `;
    });

    console.log(spotlights);
}

getSpotlights();