// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).


fetch ('https://restcountries.com/v3.1/all')
.then(response => {

    return response.json() // return as Json Object
})
.then(data =>{

    console.log(data);

// a. Get all the countries from Asia continent /region using Filter function
let countriesFromAsiaContinent = data.filter(data => {
    return data.region === 'Asia';
});

//There are 50 countries belongs to Asia Contnent.
console.log(countriesFromAsiaContinent);


// b. Get all the countries with a population of less than 2 lakhs using Filter function.

let countriesWithPopulationLessThanTwoLakhs = data.filter(data => {
    return data.population < 200000;
});

//There are 62 countries having population less than 2  lakhs.
console.log(countriesWithPopulationLessThanTwoLakhs);


// c. Print the following details name, capital, flag, using forEach function
let printNameCapitalFlagForEachCountry = data.forEach(data=> {

    console.log(
    data.name,
    data.capital,
    data.flag
    )

});

console.log(printNameCapitalFlagForEachCountry);


// d.Print the total population of countries using reduce function

let totalPopulationOfCountries = data.reduce((accumulator, data) => {
    return accumulator + data.population;
}, 0);

console.log(totalPopulationOfCountries)

// e. Print the country that uses US dollars as currency.

let countriesUsingUSDollars = data.filter(country => {
    return country.currencies && country.currencies.USD;
  });
  console.log('Countries using US dollars:', countriesUsingUSDollars);
})