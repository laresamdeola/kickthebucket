import { countryLifeExpectancy } from './data.js'

var lifeExpectancy: number

const remainingYears = (life: age) => {
  let date = new Date()
  let year = date.getFullYear()
  let currentAge = year - life.yearOfBirth
  let countryExpectancy = life.residentCountry

  // Destructuring countries

  const [countries, expectancies] = countryLifeExpectancy
  const countryNames = countries.country
  const listOfCountries = Object.values(countryNames)

  // Destructuring life expectancy

  const expectancyYears = expectancies.years
  const listOfExpectancies = Object.values(expectancyYears)

  //console.log(listOfExpectancies)

  for (let value in listOfCountries) {
    if (listOfCountries[value] == countryExpectancy) {
      lifeExpectancy = Number(listOfExpectancies[(listOfCountries.indexOf(countryExpectancy))].toFixed())
      lifeExpectancy = lifeExpectancy - currentAge
    }
  }

  return lifeExpectancy
}

const person: age = {
  yearOfBirth: 1992,
  residentCountry: 'United States'
}

if (lifeExpectancy === 0) {
  console.log(`Sorry ${person.residentCountry}\'s data is not available`)
} else {
  console.log(`You have ${remainingYears(person)} years left.`)
}
