
//declare base URLs
const peopleBase = 'https://swapi.co/api/people';
const planetBase = 'https://swapi.co/api/planets';
const shipBase = 'https://swapi.co/api/starships';
const speciesBase = 'https://swapi.co/api/species';

//Reference DOM elements

//first level buttons
const people = document.querySelector('#people');
const planets = document.querySelector('#planets');
const starships = document.querySelector('#starships');
const species = document.querySelector('#species');

//results navigation
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const nav = document.querySelector('nav');

//level 1 results section
const section = document.querySelector('#list-tab');
const result1 = section.getElementsByClassName('list-group-item');

//second level - result of first level click

//PEOPLE ELEMENTS
const peopleDeets = document.querySelector('#peopleDeets');
const nameClicked = document.querySelector('#name');
const gender = document.querySelector('#gender');
const height = document.querySelector('#height');
const mass = document.querySelector('#mass');
const hair = document.querySelector('#hair');
const eye = document.querySelector('#eye');
const birthYear = document.querySelector('#birthYear');
const homeworldText = document.querySelector('#homeworld');
const skin = document.querySelector('#skin');


//PLANET ELEMENTS
const planetDeets = document.querySelector('#planetDeets');
const namePlanet = document.querySelector("#namePlanet");
const population = document.querySelector("#population");
const diameter = document.querySelector("#diameter");
const climate = document.querySelector("#climate");
const gravity = document.querySelector("#gravity");
const water = document.querySelector("#water");
const terrain = document.querySelector("#terrain");
const rotation = document.querySelector("#rotation");
const orbit = document.querySelector("#orbit");

//STARSHIP ELEMENTS
const starshipDeets = document.querySelector('#starshipDeets');
const model = document.querySelector('#model');
const nameShip = document.querySelector('#nameShip');
const starship_class = document.querySelector('#starship_class');
const manufacturer = document.querySelector('#manufacturer');
const cost_in_credits = document.querySelector('#cost_in_credits');
const length = document.querySelector('#length');
const crew = document.querySelector('#crew');
const MGLT = document.querySelector('#MLGT');
const cargo_capacity = document.querySelector('#cargo_capacity');

//SPECIES ELEMENTS
const speciesDeets = document.querySelector('#speciesDeets');
const nameSpecies = document.querySelector('#nameSpecies');
const classification = document.querySelector('#classification');
const designation = document.querySelector('#designation');
const average_height = document.querySelector('#average_height');
const average_lifespan = document.querySelector('#average_lifespan');
const language = document.querySelector('#language');
const hair_colors = document.querySelector('#hair_colors');
const eye_colors = document.querySelector('#eye_colors');
const skin_colors = document.querySelector('#skin_colors');


const films1 = document.querySelector('#films1'); 

//reference the films table in the DOM in order to add films 
const filmsTable = document.querySelector('#filmsTable');
const filmCrawl = document.querySelector('#filmCrawl');

//set NAV and level 1 results section to none in CSS so previous/next navigation and level 1 results load later
nav.style.display = "none";
section.style.display = "none";
films1.style.display = "none";
filmCrawl.style.display = "none";

//set details displays to none

peopleDeets.style.display = "none";
planetDeets.style.display = "none";
starshipDeets.style.display = "none";
speciesDeets.style.display = "none";

//pagation

let pageNumber = 1;
//console.log('PageNumber:', pageNumber);
let displayNav = false;

//add listeners to allow result on click
people.addEventListener('click', fetchResultsPeople);
planets.addEventListener('click', fetchResultsPlanets);
starships.addEventListener('click', fetchResultsStarships);
species.addEventListener('click', fetchResultsSpecies);
//filmsExpand.addEventListener('click', fetchResultsFilms);

//add page button click
nextBtn.addEventListener('click', nextPage);
prevBtn.addEventListener('click', prevPage);


//*********************************FUNCTIONS RELATED TO INITIAL (TOP) CLICKS ***********

//FUNCTION 1: FETCH PEOPLE
function fetchResultsPeople(e) {
    peopleDeets.style.display = "none";
    planetDeets.style.display = "none";
    starshipDeets.style.display = "none";
    speciesDeets.style.display = "none";
    films1.style.display = "none";
   
    url = peopleBase + '?page=' + pageNumber;
  
    console.log(url);
    fetch(url)
    .then(function(result) {
        //console.log(result);
    return result.json();
    }).then(function(json){
        console.log(json);
        displayPeople(json);
    });

    //still within FETCH PEOPLE function, display results of people
    function displayPeople(json) {
       
        let peopleResults = json.results;
        console.log(peopleResults);

        if(peopleResults.length >= 1) {
            nav.style.display = 'block';
            section.style.display = "block";
             //allows the nav bar to display if there is an item in the array
        } else {
            nav.style.display = 'block';
            section.style.display = 'none';
        }
        if(peopleResults.length === 0) {
            console.log("No results")
        } else {
           
            for (let i = 0; i < peopleResults.length; i++){
               // console.log(i);
               
                let current = peopleResults[i].name; //name is an element specific to array; referencing the i item of the array, and the name element in that position
                result1[i].textContent = current; //populates the list of names into result1 variable (text buttons on the web page)
                //console.log(current + i);
                result1[i].addEventListener('click', expandResult); //gives the list element ability to run expandResult function on click
                result1[i].setAttribute("id", i); //adds ID to DOM element so the ID (array index) can be referenced for expandResults
            }
        }
    }

}

//FUNCTION 2: FETCH PLANETS
function fetchResultsPlanets(e) {
    peopleDeets.style.display = "none";
    planetDeets.style.display = "none";
    starshipDeets.style.display = "none";
    speciesDeets.style.display = "none";
    films1.style.display = "none";
   
    url = planetBase + '?page=' + pageNumber;
    
    console.log(url);
    fetch(url)
    .then(function(result) {
        //console.log(result);
    return result.json();
    }).then(function(json){
        console.log(json);
        displayPlanets(json);
    });

    //still within FETCH PLANETS function, display results of planets
    function displayPlanets(json) {
        peopleDeets.style.display = "none";
        //relFilms.style.display = "none";
     
        let planetResults = json.results;
        //console.log(peopleResults);

        if(planetResults.length >= 1) {
            nav.style.display = 'block';
            section.style.display = "block";
             //allows the nav bar to display if there is an item in the array
        } else {
            nav.style.display = 'block';
            section.style.display = 'none';
        }
        if(planetResults.length === 0) {
            console.log("No results")
        } else {
           
            for (let i = 0; i < planetResults.length; i++){
                //console.log(i);
                let current = planetResults[i].name; //name is an element specific to array; referencing the i item of the array, and the name element in that position
                result1[i].textContent = current; //populates the list of names into result1 variable (text buttons on the web page)
                console.log(current + i);
                result1[i].addEventListener('click', expandResult); //gives the list element ability to run expandResult function on click
                result1[i].setAttribute("id", i); //adds ID to DOM element so the ID (array index) can be referenced for expandResults
            }
    }

}}

//FUNCTION 3: FETCH STARSHIPS
function fetchResultsStarships(e) {
    peopleDeets.style.display = "none";
    planetDeets.style.display = "none";
    starshipDeets.style.display = "none";
    speciesDeets.style.display = "none";
    films1.style.display = "none";
    
    url = shipBase + '?page=' + pageNumber
    
    console.log(url);
    fetch(url)
    .then(function(result) {
        //console.log(result);
    return result.json();
    }).then(function(json){
        console.log(json);
        displayShips(json);
    });

    //still within FETCH STARSHIPS function, display results of starships
    function displayShips(json) {
        
        let shipResults = json.results;
        //console.log(peopleResults);

        if(shipResults.length >= 1) {
            nav.style.display = 'block';
            section.style.display = "block";
             //allows the nav bar to display if there is an item in the array
        } else {
            nav.style.display = 'block';
            section.style.display = 'none';
        }
        if(shipResults.length === 0) {
            console.log("No results")
        } else {
           
            for (let i = 0; i < shipResults.length; i++){
               // console.log(i);
                let current = shipResults[i].name; //name is an element specific to array; referencing the i item of the array, and the name element in that position
                result1[i].textContent = current; //populates the list of names into result1 variable (text buttons on the web page)
                //console.log(current + i);
                result1[i].addEventListener('click', expandResult); //gives the list element ability to run expandResult function on click
                result1[i].setAttribute("id", i); //adds ID to DOM element so the ID (array index) can be referenced for expandResults
            }
        }
    }
}

//FUNCTION 4: FETCH SPECIES
function fetchResultsSpecies(e) {
    peopleDeets.style.display = "none";
    planetDeets.style.display = "none";
    starshipDeets.style.display = "none";
    speciesDeets.style.display = "none";
    films1.style.display = "none";
    //if (result1[i]) {
    //    result1[i].removeEventListener;
    //}else 
     //return;
    url = speciesBase + '?page=' + pageNumber;
   
    console.log(url);
    fetch(url)
    .then(function(result) {
        //console.log(result);
    return result.json();
    }).then(function(json){
        console.log(json);
        displaySpecies(json);
    });

    //still within FETCH SPECIES function, display results of species
    function displaySpecies(json) {
    
        let speciesResults = json.results;
        //console.log(peopleResults);

        if(speciesResults.length >= 1) {
            nav.style.display = 'block';
            section.style.display = "block";
             //allows the nav bar to display if there is an item in the array
        } else {
            nav.style.display = 'block';
            section.style.display = 'none';
        }
        if(speciesResults.length === 0) {
            console.log("No results")
        } else {
           
            for (let i = 0; i < speciesResults.length; i++){
               // console.log(i);
                let current = speciesResults[i].name; //name is an element specific to array; referencing the i item of the array, and the name element in that position
                result1[i].textContent = current; //populates the list of names into result1 variable (text buttons on the web page)
                //console.log(current + i);
                result1[i].addEventListener('click', expandResult); //gives the list element ability to run expandResult function on click
                result1[i].setAttribute("id", i); //adds ID to DOM element so the ID (array index) can be referenced for expandResults
            }
        }
    }
}

//*****************************FUNCTIONS RELATED TO LEFT HAND CLICKS ***************************

//FUNCTION 1A: EXPAND PEOPLE RESULTS ON CLICK
function expandResult(e) {
    //show no detail tables upon click
    peopleDeets.style.display = "none";
    planetDeets.style.display = "none";
    starshipDeets.style.display = "none";
    speciesDeets.style.display = "none";
    films1.style.display = "none";
    
    if(url.includes(peopleBase)){
  
    //which element clicked? call that i
    let i = e.target.id;
    console.log(i);
    console.log(url);

    fetch(url)
    .then(function(result) {
        //console.log(result);
    return result.json();
    }).then(function(json){
        //console.log(json);
        
       let details = json.results;
        //console.log(details[i]);

        //Fill in text content of each peopleDeets table element

        nameClicked.textContent = details[i].name;
        gender.textContent = details[i].gender;
        height.textContent = details[i].height;
        mass.textContent = details[i].mass;
        hair.textContent = details[i].hair_color;
        eye.textContent = details[i].eye_color;
        birthYear.textContent = details[i].birth_year;
        skin.textContent = details[i].skin_color;

        //display the peopleDeets table
        peopleDeets.style.display = "block";
       
        //The star wars API includes only a url as homeworld data in the people API.  
        //must look up name of homeworld from this link.

    
//SECOND FETCH TO GET HOMEWORLD NAME (not URL)
        //set a constant for the url of homeworld data
        const homeworldLookup = details[i].homeworld;
       
        fetch(homeworldLookup)
        .then(function(result) {
            return result.json();
        }).then(function(homeworld){
            //console.log(json)
            let homeDeets = homeworld.name;
            //console.log(homeDeets);

        //change the homeworld text to include the name of the homeworld 
            homeworldText.textContent = homeDeets;
        //lookup films
            filmLookup(details[i].films);
        });
      
    }
    )
    //************DISPLAY PLANET DETAILS**********

} else if (url.includes(planetBase)){
    let i = e.target.id;
    console.log(i);
    console.log(url);

    fetch(url)
    .then(function(result) {
        //console.log(result);
    return result.json();
    }).then(function(json){
        //console.log(json);
        let details = json.results;
        console.log(details[i]);

        //Fill in text content of each planetDeets table element
        namePlanet.textContent = details[i].name;
        population.textContent = details[i].population;
        diameter.textContent = details[i].diameter;
        climate.textContent = details[i].climate;
        gravity.textContent = details[i].gravity;
        water.textContent = details[i].surface_water;
        terrain.textContent = details[i].terrain;
        rotation.textContent = details[i].rotation_period;
        orbit.textContent = details[i].orbital_period;
    
        //relFilms.style.display = "block";
        planetDeets.style.display = "block";
        filmLookup(details[i].films);
    })

    //*******************DISPLAY STARSHIP DETAILS */

} else if (url.includes(shipBase)){
    let i = e.target.id;
        console.log(i);
        console.log(url);
    
        fetch(url)
        .then(function(result) {
            //console.log(result);
        return result.json();
        }).then(function(json){
            //console.log(json);
            let details = json.results;
            console.log(details[i]);
    
            //Fill in text content of each shipDeets table element
            nameShip.textContent = details[i].name;
            model.textContent = details[i].model;
            starship_class.textContent = details[i].starship_class;
            manufacturer.textContent = details[i].manufacturer;
            cost_in_credits.textContent = details[i].cost_in_credits;
            length.textContent = details[i].length;
            crew.textContent = details[i].crew;
            MGLT.textContent = details[i].MGLT;
            cargo_capacity.textContent = details[i].cargo_capacity;

          
            starshipDeets.style.display = "block";
            filmLookup(details[i].films);

        })

        //**********************DISPLAY SPECIES DETAILS */
} else if(url.includes(speciesBase)){
    let i = e.target.id;
        console.log(i);
        console.log(url);
    
        fetch(url)
        .then(function(result) {
            //console.log(result);
        return result.json();
        }).then(function(json){
            //console.log(json);
            let details = json.results;
            console.log(details[i]);
    
    //Fill in text content of each speciesDeets table element
            nameSpecies.textContent = details[i].name;
            classification.textContent = details[i].classification;
            designation.textContent = details[i].designation;
            average_height.textContent = details[i].average_height;
            average_lifespan.textContent = details[i].average_lifespan;
            language.textContent = details[i].language;
            hair_colors.textContent = details[i].hair_colors;
            eye_colors.textContent = details[i].eye_colors;
            skin_colors.textContent = details[i].skin_colors;

            //relFilms.style.display = "block";
            speciesDeets.style.display = "block";

    filmLookup(details[i].films);
})
} 
}
       
//*********************GET FILM NAMES************ */

//REMOVE OLD FILM NAMES
function removeFilms(){
    let btnTest = filmsTable.getElementsByClassName('btn');
    filmCrawl.style.display = "none";
    //when used btnTest in the for loop below (where listLenth now lies) btnTest value changed after iterations.
    //added another constant, listLength, which stays the same value throughout the for loop. 
    const listLength = btnTest.length;
    if (btnTest.length > 0) {
        for(i = 0; i < listLength; i++) {
            //always delete row at index 0
            filmsTable.deleteRow(0);
        }
    }
}

function filmLookup(filmLookup) {
    removeFilms();
    filmCrawl.style.display = "none";
    //const filmLookup = details[i].films;
    for (n in filmLookup) {
        console.log(filmLookup[n]);
        fetch(filmLookup[n])
        .then(function(result) {
            return result.json();
        }).then(function(films){
            let filmsDeets = films;
            console.log(filmsDeets);
            console.log(filmsDeets.title);
            
    //create row in films table for title
            let filmRow = filmsTable.insertRow();             
    //insert button inside row of films table
           let button = document.createElement('BUTTON');
    //set attributes of button to bootstrap class
           button.setAttribute('class', 'btn btn-outline-info text-nowrap btn-block');
           button.addEventListener('click', showFilmCrawl);
    //set text content of button to the name of the film       
           button.textContent = filmsDeets.title;
           button.href = filmsDeets.opening_crawl;
    //add the button to the table row
    
           filmRow.appendChild(button);
           films1.style.display = "block";    
           
         
        })
    }}
    function showFilmCrawl(e) {
        filmCrawl.style.display = "block";
        let i = e.target.textContent;
        let c = e.target.href;
        console.log(i);
        filmCrawl.textContent = i + " Opening Crawl: " + c;
        console.log(url);
        
    }

//**********************************PAGE FUNCTIONS ********************************

function nextPage(e) {
    pageNumber++;
    console.log(pageNumber);
        //clear out results of last page with a loop; 
        //each item was assigned an ID using the SET ATTRIBUTE method in the display results function.
        for (let x = 0; x <= 9; x++){
        let clearX = document.getElementById(x);
        //console.log(clearX);
        clearX.textContent = null;
        }
        peopleDeets.style.display = "none";
        planetDeets.style.display = "none";
       
    if (url.includes(peopleBase) ) {
        fetchResultsPeople(e);
    }
    else if (url.includes(planetBase)){
        fetchResultsPlanets(e);
    }
    else if (url.includes(shipBase)){
        fetchResultsStarships(e);
    }
    else if (url.includes(speciesBase)){
        fetchResultsSpecies(e);
    }
}

function prevPage(e) {
    if  (pageNumber > 0 && url.includes(peopleBase)) {
        pageNumber --;
        console.log(pageNumber);
        peopleDeets.style.display = "none";
        planetDeets.style.display = "none";
        fetchResultsPeople(e);
    }
    else if(pageNumber > 0 && url.includes(planetBase)) {
        pageNumber --;
        console.log(pageNumber);
        fetchResultsPlanets(e);
    }
    else if(pageNumber > 0 && url.includes(shipBase)) {
        pageNumber --;
        fetchResultsStarships(e);
    }
    else if(pageNumber > 0 && url.includes(speciesBase)) {
        pageNumber --;
        fetchResultsSpecies(e);
    }
     else {
        return;
    }
}
