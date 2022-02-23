'use strict';

// VARIABLE SETTING

let locationSales = document.getElementById('location-sales');

let storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

let locationArray = []; 

let formNewLoc = document.getElementById('new-location');

// CONSTRUCTOR FUNCTION

function Sales(geo, minCust, maxCust, avgCook, custPerHour, cookPerHour, totalCook) {
  this.geo = geo;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.custPerHour = custPerHour;
  this.cookPerHour = cookPerHour;
  this.totalCook = totalCook;

  locationArray.push(this);
}

let seattle = new Sales('Seattle', 23, 65, 6.3, [], [], 0);

let tokyo = new Sales('Tokyo', 3, 24, 1.2, [], [], 0);

let dubai = new Sales('Dubai', 11, 38, 3.7, [], [], 0);

let paris = new Sales('Paris', 20, 38, 2.3, [], [], 0);

let lima = new Sales('Lima', 2, 16, 4.6, [], [], 0);

// PROTOTYPAL INHERITANCE

Sales.prototype.getHourCust = function() {
  for (let i = 0; i < storeHours.length; i++) {
    this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
  }
}

Sales.prototype.getHourCook = function() {
  this.getHourCust();
  for (let i = 0; i < storeHours.length; i++) {
    this.cookPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCook));
    this.totalCook += this.cookPerHour[i];
  }
}

Sales.prototype.render = function() {
    this.getHourCook();
  
    let tableBody = document.createElement('tbody');
    locationSales.appendChild(tableBody);
  
    let row = document.createElement('tr');
    tableBody.appendChild(row);
  
    let headCell = document.createElement('th');
    headCell.textContent = `${this.geo}`;
    row.appendChild(headCell);
  
    for (let i = 0; i < this.cookPerHour.length; i++) {
      let cellData = document.createElement('td');
      cellData.textContent = `${this.cookPerHour[i]}`;
      row.appendChild(cellData);
    }
  
    let lastCell = document.createElement('td');
    lastCell.setAttribute("class", "lastcell");
    lastCell.textContent = `${this.totalCook}`;
    row.appendChild(lastCell);
  }


function renderHeader() {
  
  let header = document.createElement('thead');
  locationSales.appendChild(header);

  let headerRow = document.createElement('tr');
  header.appendChild(headerRow);

  let thElem1 = document.createElement('th');
  thElem1.textContent = ``;
  headerRow.appendChild(thElem1);

  for(let i = 0; i < storeHours.length; i++) {
    let thElem = document.createElement('th');
    thElem.textContent = `${storeHours[i]}`;
    headerRow.appendChild(thElem);
  }
  let thElem = document.createElement('th');
  thElem.textContent = `Daily Location Total`;
  headerRow.appendChild(thElem);
}

function renderFooter() {
  
  let footer = document.createElement('tfoot');
  footer.setAttribute('id', 'tabfoot')
  locationSales.appendChild(footer);

  let footerRow = document.createElement('tr');
  footer.appendChild(footerRow);

  let tfElem1 = document.createElement('td');
  tfElem1.textContent = `Hourly Totals`;
  footerRow.appendChild(tfElem1);

  let totalForDay = 0;
  for (let i = 0; i < storeHours.length; i++) {
    let totalByHour = 0;
    for (let j = 0; j < locationArray.length; j++) {
      totalByHour += (locationArray[j].cookPerHour[i]);
    }
    let grandTotalByHour = document.createElement('td');
    grandTotalByHour.textContent = `${totalByHour}`;
    footerRow.appendChild(grandTotalByHour);
    totalForDay += totalByHour;
  }
  let grandTotalByDay = document.createElement('td');
  grandTotalByDay.textContent = `${totalForDay}`;
  footerRow.appendChild(grandTotalByDay);
}

// COMPREHENSIVE TABLE RENDER FUNCTION

function tableCookSales() {
  renderHeader();
  for (let i = 0; i < locationArray.length; i++) {
    let getLoc = locationArray[i];
    getLoc.render();
  }
  renderFooter();
}
tableCookSales();

// EVENT HANDLER

function handleSubmit(event) {
  event.preventDefault();
  console.log('submit');
  let geo = event.target.geo.value;
  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;
  let avgCook = +event.target.avgCook.value;
  let newLoc = new Sales(geo, minCust, maxCust, avgCook, [], [], 0);
  console.log(newLoc);
  newLoc.render();

  let removeFooter = document.getElementById('tabfoot');
  removeFooter.innerHTML = "";
  removeFooter.remove();
  renderFooter();
  
  formNewLoc.reset();
}

// ATTACH EVENT LISTENER

formNewLoc.addEventListener('submit', handleSubmit);