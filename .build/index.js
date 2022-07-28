var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_data = __toModule(require("./data.js"));
var lifeExpectancy;
const remainingYears = (life) => {
  let date = new Date();
  let year = date.getFullYear();
  let currentAge = year - life.yearOfBirth;
  let countryExpectancy = life.residentCountry;
  const [countries, expectancies] = import_data.countryLifeExpectancy;
  const countryNames = countries.country;
  const listOfCountries = Object.values(countryNames);
  const expectancyYears = expectancies.years;
  const listOfExpectancies = Object.values(expectancyYears);
  for (let value in listOfCountries) {
    if (listOfCountries[value] == countryExpectancy) {
      lifeExpectancy = Number(listOfExpectancies[listOfCountries.indexOf(countryExpectancy)].toFixed());
      lifeExpectancy = lifeExpectancy - currentAge;
    }
  }
  return lifeExpectancy;
};
const satoglu = {
  yearOfBirth: 2e3,
  residentCountry: "Nigeria"
};
if (lifeExpectancy === 0) {
  console.log(`Sorry ${satoglu.residentCountry}'s data is not available`);
} else {
  console.log(`You have ${remainingYears(satoglu)} years left.`);
}
//# sourceMappingURL=index.js.map
