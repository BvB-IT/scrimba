let myArray = [];
let myLeads = [];
const inputEl = document.getElementById('input-el');
const value = inputEl.value;
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const container = document.getElementById('container');

inputBtn.addEventListener('click', function () {
  if (value) {
    myLeads.push(value);
    inputEl.value = '';
    renderLeads();
  }
});

function renderLeads() {
  let listItems = '';
  for (i = 0; i < myLeads.length; i++) {
    listItems +=
      '<li>' +
      `<a href="https://${myLeads[i]}">` +
      myLeads[i] +
      '</a>' +
      '</li>';
    console.log(listItems);
    // ulEl.innerHTML += '<li>' + myLeads[i] + '</li>';
    // An alternativ more elobarate way to achieve the same as above is:
    // create element
    // set text content
    // append to ul
    // const li = document.createElement('li');
    // li.textContent = myLeads[i];
    // ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
}

function saveLead() {
  for (i = 0; i < myArray.length; i++) {}
}

function bought() {
  container.innerHTML += '<p>Thanks fo the purchase</p>';
}

function addBuyButton() {
  container.innerHTML +=
    '<button "id = buy-btn onclick="bought()">BUY</button>';
  const boughtBtn = getElementById('buy-btn');
  boughtBtn.addEventListener('click', function () {
    container.innerHTML += '<p>Thanks fo the purchase</p>';
  });
}

addBuyButton();
