'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

let seattle = {
  minCust: 23,
  maxCust: 65,
  avgCook: 6.3,
  hourCust: 0,
  /*getHourCust: function() {
    this.hourCust = randomCust(this.minCust,this.maxCust);
  },*/
  cookiesHour: 0,
  /*getHourCook: function() {
    this.cookiesHour = multiply(this.hourCust,this.avgCook);
  },*/
  getHourCook: function() {
    let cookiesArray = [];
    totalCookies = 0;
    for (i = 0, i < 14, i++) {
      this.hourCust = randomCust(this.minCust,this.maxCust);
      this.cookiesHour = multiply(this.hourCust,this.avgCook);

      cookiesArray.push(this.cookiesHour);
      totalCookies += this.cookiesHour;
    }
    cookiesArray.push(totalCookies);
  }
}

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
function randomCust(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function multiply(a,b) {
  return a * b;
}
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
let locationSales = document.getElementById('location-sales');

console.log(locationSales);
console.dir(locationSales);