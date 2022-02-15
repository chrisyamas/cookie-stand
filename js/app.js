'use strict';

// **Window into the DOM**

let locationSales = document.getElementById('location-sales');

console.log(locationSales); // html element
console.dir(locationSales); // element as a JS Object

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  geo: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCook: 6.3,
  custPerHour: [],
  cookPerHour: [],
  totalCook: 0,
  cookiesHour: 0,
  getHourCust: function() {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.custPerHour);
    }
  },
  getHourCook: function() {
    for (let i = 0; i < storeHours.length; i++) {
      this.cookPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCook));
      this.totalCook += this.cookPerHour[i];
      console.log(this.cookPerHour);
    }
  },
}
seattle.getHourCust();
seattle.getHourCook();

let tokyo = {
  geo: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCook: 1.2,
  custPerHour: [],
  cookPerHour: [],
  totalCook: 0,
  cookiesHour: 0,
  getHourCust: function() {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.custPerHour);
    }
  },
  getHourCook: function() {
    for (let i = 0; i < storeHours.length; i++) {
      this.cookPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCook));
      this.totalCook += this.cookPerHour[i];
      console.log(this.cookPerHour);
    }
  },
}
tokyo.getHourCust();
tokyo.getHourCook();

let dubai = {
  geo: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCook: 3.7,
  custPerHour: [],
  cookPerHour: [],
  totalCook: 0,
  cookiesHour: 0,
  getHourCust: function() {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.custPerHour);
    }
  },
  getHourCook: function() {
    for (let i = 0; i < storeHours.length; i++) {
      this.cookPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCook));
      this.totalCook += this.cookPerHour[i];
      console.log(this.cookPerHour);
    }
  },
}
dubai.getHourCust();
dubai.getHourCook();

let paris = {
  geo: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCook: 2.3,
  custPerHour: [],
  cookPerHour: [],
  totalCook: 0,
  cookiesHour: 0,
  getHourCust: function() {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.custPerHour);
    }
  },
  getHourCook: function() {
    for (let i = 0; i < storeHours.length; i++) {
      this.cookPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCook));
      this.totalCook += this.cookPerHour[i];
      console.log(this.cookPerHour);
    }
  },
}
paris.getHourCust();
paris.getHourCook();

let lima = {
  geo: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCook: 4.6,
  custPerHour: [],
  cookPerHour: [],
  totalCook: 0,
  cookiesHour: 0,
  getHourCust: function() {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.custPerHour);
    }
  },
  getHourCook: function() {
    for (let i = 0; i < storeHours.length; i++) {
      this.cookPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCook));
      this.totalCook += this.cookPerHour[i];
      console.log(this.cookPerHour);
    }
  },
}
lima.getHourCust();
lima.getHourCook();

// ********* DOM MANIPULATION ***********

// Step 1 - JS Needs a window into the DOM - normally listed at the top of the JS page
// Step 2 - JS will create an element - document.createElement - method, string of the html element you want create
// Step 3 - Give it context if needed (optional)
// Step 4 - add it to the DOM

// location sales will render themselves and add their information via render method.
seattle.render = function() {
  // step 2 - create the element
  let h2Elem = document.createElement('h2');
  // step 3 - give it context if needed (optional)
  h2Elem.textContent = this.geo;
  // step 4 - add it to the DOM -- parent.appendChild(child)
  locationSales.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  locationSales.appendChild(ulElem);

  for(let i = 0; i < this.cookPerHour.length; i++) {
    let currentCook = this.cookPerHour[i];
    let hourOfDay = storeHours[i];
    let liElem = document.createElement('li');
    liElem.textContent = `${hourOfDay}: ${currentCook} cookies`;
    ulElem.appendChild(liElem);
  }
  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.totalCook} cookies`;
  ulElem.appendChild(liElem);
}

tokyo.render = function() {
  // step 2 - create the element
  let h2Elem = document.createElement('h2');
  // step 3 - give it context if needed (optional)
  h2Elem.textContent = this.geo;
  // step 4 - add it to the DOM -- parent.appendChild(child)
  locationSales.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  locationSales.appendChild(ulElem);

  for(let i = 0; i < this.cookPerHour.length; i++) {
    let currentCook = this.cookPerHour[i];
    let hourOfDay = storeHours[i];
    let liElem = document.createElement('li');
    liElem.textContent = `${hourOfDay}: ${currentCook} cookies`;
    ulElem.appendChild(liElem);
  }
  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.totalCook} cookies`;
  ulElem.appendChild(liElem);
}

dubai.render = function() {
  // step 2 - create the element
  let h2Elem = document.createElement('h2');
  // step 3 - give it context if needed (optional)
  h2Elem.textContent = this.geo;
  // step 4 - add it to the DOM -- parent.appendChild(child)
  locationSales.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  locationSales.appendChild(ulElem);

  for(let i = 0; i < this.cookPerHour.length; i++) {
    let currentCook = this.cookPerHour[i];
    let hourOfDay = storeHours[i];
    let liElem = document.createElement('li');
    liElem.textContent = `${hourOfDay}: ${currentCook} cookies`;
    ulElem.appendChild(liElem);
  }
  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.totalCook} cookies`;
  ulElem.appendChild(liElem);
}

paris.render = function() {
  // step 2 - create the element
  let h2Elem = document.createElement('h2');
  // step 3 - give it context if needed (optional)
  h2Elem.textContent = this.geo;
  // step 4 - add it to the DOM -- parent.appendChild(child)
  locationSales.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  locationSales.appendChild(ulElem);

  for(let i = 0; i < this.cookPerHour.length; i++) {
    let currentCook = this.cookPerHour[i];
    let hourOfDay = storeHours[i];
    let liElem = document.createElement('li');
    liElem.textContent = `${hourOfDay}: ${currentCook} cookies`;
    ulElem.appendChild(liElem);
  }
  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.totalCook} cookies`;
  ulElem.appendChild(liElem);
}

lima.render = function() {
  // step 2 - create the element
  let h2Elem = document.createElement('h2');
  // step 3 - give it context if needed (optional)
  h2Elem.textContent = this.geo;
  // step 4 - add it to the DOM -- parent.appendChild(child)
  locationSales.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  locationSales.appendChild(ulElem);

  for(let i = 0; i < this.cookPerHour.length; i++) {
    let currentCook = this.cookPerHour[i];
    let hourOfDay = storeHours[i];
    let liElem = document.createElement('li');
    liElem.textContent = `${hourOfDay}: ${currentCook} cookies`;
    ulElem.appendChild(liElem);
  }
  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.totalCook} cookies`;
  ulElem.appendChild(liElem);
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();