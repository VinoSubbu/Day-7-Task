//Creating a HttpRequest 
//   const req = new XMLHttpRequest();

//  req.addEventListener("load", reqListener);

// What i want to do and from Where i want to get(link) 
  // req.open("GET", "https://restcountries.com/v3.1/all");

// Sending request to server
  // req.send();

// What to do when request is Completed
//  req.onload = function () {
//     console.log(JSON.parse(this.response));
//  } 

// function reqListener() {
//     console.log(this.responseText);
//   }


// a. Get all the countries from Asia continent /region using Filter function -------------------------------

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Filter countries from Asia continent
        const asianCountries = data.filter(country => country.region === 'Asia');

        // Extract country names
        const asianCountryNames = asianCountries.map(country => country.name.common);

        // Print the list of Asian countries
        console.log("Asian Countries:", asianCountryNames);
    })
  

// b. Get all the countries with a population of less than 2 lakhs using Filter function ---------------------

    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Filter countries with a population of less than 2 lakhs
        const countriesWithLowPopulation = data.filter(country => country.population < 200000);

        // Extract country names
        const countryNamesWithLowPopulation = countriesWithLowPopulation.map(country => country.name.common);

        // Print the list of countries with a population of less than 2 lakhs
        console.log("Countries with population less than 2 lakhs:", countryNamesWithLowPopulation);
    })

// c. Print the following details name, capital, flag, using forEach function ---------------------------
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Iterate through each country and print details
        data.forEach(country => {
            console.log("Name:", country.name.common);
            console.log("Capital:", country.capital);
            console.log("Flag:", country.flags.png);
            console.log("-----------------------");
        });
    })

// d. Print the total population of countries using reduce function --------------------------------------
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Calculate total population using reduce function
        const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);

        // Print the total population
        console.log("Total population of all countries:", totalPopulation);
    })


// e. Print the country that uses US dollars as currency. -------------------------------------------- 
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Find countries that use US dollars as currency
        const countriesWithUSD = data.filter(country => country.currencies && country.currencies. USD);

        // Print the name of the countries
        console.log("Countries that use US dollars as currency:");
        countriesWithUSD.forEach(country => {
            console.log(country.name.common);
        });
    })