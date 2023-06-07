"use strict";

console.log('loading...');


const citiesDropdown = document.getElementById("citiesDropdown");
let selectedCity = citiesDropdown.value;

const latitudeOutput = document.getElementById("latitudeOutput");
const longitudeOutput = document.getElementById("longitudeOutput");

const geoCard = document.getElementById("geoCard");
const table = document.getElementById("table");

const weathertablebody = document.getElementById("weathertablebody");



window.onload = function () {

    addCitiesToDropdown();

    hideGeographicLocationCard();

    hideTableCard();

    citiesDropdown.onchange = showGeographicLocation;
}




function addCitiesToDropdown() {
    citiesDropdown.innerHTML = ""
    let initalOption = new Option("Please Select A State", "")
    citiesDropdown.appendChild(initalOption)
    for (let city of cities) {

        let newCityOption = new Option(city.name);
        citiesDropdown.appendChild(newCityOption);
    }

    console.log(`Cities are in the Dropdown`);
}



function showGeographicLocation() {
    weathertablebody.innerHTML = "";
    selectedCity = citiesDropdown.value;

    if (selectedCity !== "") {
        const theSelectedCity = cities.find(city => city.name === selectedCity);

        const latitude = theSelectedCity.latitude;
        const longitude = theSelectedCity.longitude;


        console.log(latitude);
        console.log(longitude);

        latitudeOutput.innerHTML = latitude;
        longitudeOutput.innerHTML = longitude;

        showGeographicLocationCard();
        showTableCard();
        getWeatherFromAPIForCity();
    }
    else{
        hideTableCard()
    }
}




function hideGeographicLocationCard() {

    geoCard.style.display = "none";

}

function showGeographicLocationCard() {

    geoCard.style.display = "block";

}



function hideTableCard() {

    table.style.display = "none";

}

function showTableCard() {

    table.style.display = "block";

}




function getWeatherFromAPIForCity() {

    const theSelectedCity = cities.find(city => city.name === selectedCity);
    const stationLookupUrl = `https://api.weather.gov/points/${theSelectedCity.latitude},${theSelectedCity.longitude}`;

    fetch(stationLookupUrl)
        .then(response => response.json())
        .then(data => {
            const weatherUrl = data.properties.forecast;
            getWeather(weatherUrl);
        })
}


function getWeather(weatherUrl) {
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const forecastArray = data.properties.periods;
            displayWeather(forecastArray);
        })
}

function displayWeather(forecastArray) {
    console.log(forecastArray);



    for (let rowdata of forecastArray) {
        let newrow = weathertablebody.insertRow(-1);
        let newcell1 = newrow.insertCell(0);
        newcell1.innerHTML = rowdata.name;

        let newcell2 = newrow.insertCell(1)
        newcell2.innerHTML = rowdata.temperature + rowdata.temperatureUnit;

    }


}
