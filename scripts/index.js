"use strict";


let cities = [
    {
        name: "Benbrook, TX",
        latitude: 32.6732,
        longitude: -97.4606
    },
    {
        name: "Seattle, WA",
        latitude: 47.6097,
        longitude: -122.3331
    },
    {
        name: "Miami, FL",
        latitude: 25.7617,
        longitude: -80.1918
    },
    {
        name: "Denver, CO",
        latitude: 39.7392,
        longitude: -104.9903
    },
    {
        name: "Chicago, IL",
        latitude: 41.8781,
        longitude: -87.6298
    },
    {
        name: "New York City, NY",
        latitude: 40.7128,
        longitude: -74.0060
    },
    {
        name: "San Francisco, CA",
        latitude: 37.7749,
        longitude: -122.4194
    },
    {
        name: "Nashville, TN",
        latitude: 36.1627,
        longitude: -86.7816
    },
    {
        name: "Boston, MA",
        latitude: 42.3601,
        longitude: -71.0589
    },
    {
        name: "New Orleans, LA",
        latitude: 29.9511,
        longitude: -90.0715
    }
];


const stateList = document.getElementById("stateList");
const displayData = document.getElementById("displayData");



window.onload = () => {
    stateList.onchange = onStateListChange;


    stateListSelect();
}


function stateListSelect() {

    let initalOption = new Option("Please select a location!","");
    stateList.appendChild(initalOption);

    for (let listOfStates of cities) {
        let newOption = new Option(listOfStates.name);
        stateList.appendChild(newOption);
    }
}
function onStateListChange() {
    let selectedState = stateList.value;

    const stateFilter = cities.filter(p => p.name == selectedState);
    console.log(stateFilter)
    if (stateFilter > 0) {
        for (let state of stateFilter) {
            makeCard(state);
           
        }
    }




function makeCard(state){
    let col = document.createElement("div");
    col.className = "container col my-2";
    displayData.appendChild(col);

    let card = document.createElement("div");
    card.className = "card";
    col.appendChild(card);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    let  h4StateName = document.createElement("h4");
    h4StateName.className = "card-title";
    h4StateName.innerHTML = state.name;
    cardBody.appendChild(h4StateName);

    let ulList = document.createElement("ul");
    ulList.className = "ul";
    h4parkName.appendChild(ulList);

    let listId = document.createElement("li");
    listId.className = "stateLat";
    listId.innerHTML = "latitude: " + state.latitude;
    ulList.appendChild(listId);

    let listAddress = document.createElement("li");
    listAddress.className = "stateLong";
    listAddress.innerHTML = "longitude: " + state.longitude;
    listId.appendChild(listAddress);

}


}
