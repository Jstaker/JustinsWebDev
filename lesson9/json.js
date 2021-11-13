fetch("towndata.json")
    .then(function (response){
        return response.json();
    })

    .then(function (jsonObject){
        const towns = jsonObject['towns'];
        for (let i =0; i < towns.length; i++){
            let townInfo = document.createElement('div');
            let card = document.createElement('section');
            let name = document.createElement('h3');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let photo = document.createElement('img');
///////////////////////////////////////////////////////////////////////
            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = `Year Founded: ${towns[i].yearFounded}`;
            currentPopulation.textContent = `Population: ${towns[i].currentPopulation}`;
            averageRainfall.textContent = `Annual Rain Fall: ${towns[i].averageRainfall}`
            photo.setAttribute("src", towns[i].photo);
            photo.setAttribute("alt", "scenery of town");
            card.setAttribute("class", "card");
            motto.setAttribute("class", "motto");
///////////////////////////////////////////////////////////////////////

            card.appendChild(townInfo);
            card.appendChild(name);
            card.appendChild(motto);
            card.appendChild(yearFounded);
            card.appendChild(currentPopulation);
            card.appendChild(averageRainfall);
            card.appendChild(photo);
///////////////////////////////////////////////////////////////////////
            document.querySelector("#cards").appendChild(card);
        }
    })