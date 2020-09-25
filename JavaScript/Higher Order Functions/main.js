const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

//forEach

companies.forEach(function (company) {
  console.log(company.name);
});

//filter

const canDrink = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});

//using arrow functions
const canDrink2 = ages.filter((age) => age >= 21);
console.log(canDrink);

// Filter retail companies

const retailCompanies = compainies.filter(function (company) {
  if (company.category === "Retail") {
    return true;
  }
});
console.log(retailCompanies);

// Get 80s Compaines

const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
);

//companies that lasted 10 years or more
const lasted = companies.filter((company) => company.end - company.start >= 10);
