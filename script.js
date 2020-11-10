var counter = 0;
var products = {};

function changeCart(title, price, id) {
  var basketElement = document.getElementById('basket');
  counter++;
  basketElement.innerText = counter;
  var product = products[id];
  if (product) {
    product.counter++;
  } else {
    products[id] = {
      title: title,
      price: price,
      id: id,
      count: 1
    };
  }

  /*updatePopupData();*/

  showLoader(function () {
    hideLoader();
    openPopup();
  });
}
function updatePopupData() {
  let itemsList = document.getElementById('itemsList');

  itemsList.innerHTML = '';

  for (let id in products) {
    let product = products[id];
    let basketItem = document.createElement("itemsList");
    basketItem.classList.add('basket-item');
    basketItem.innerText = items[i].product-title;
    basketItem.innerText = items[i].price;

    element.appendChild(itemsList);
  }
}
function openPopup() {
  let popup = document.getElementById('popup');
  popup.style.visibility = 'visible';
}

function closePopup() {
  let popup = document.getElementById('popup');
  popup.style.visibility = 'hidden';
}

function showLoader(callback) {
  let loader = document.getElementById('loader_inner');
  loader.style.visibility = 'visible';
  setTimeout(callback, 5000);
}

function hideLoader() {
  let loader = document.getElementById('loader_inner');
  loader.style.visibility = 'hidden';
}
