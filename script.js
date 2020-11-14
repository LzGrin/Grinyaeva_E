var counter = 0;
var title = document.getElementById('.title');
var price = document.getElementById('.price');
var itemsList = document.getElementById('itemsList');
var items = [];

function changeCart(title, price, id) {
  let basketElement = document.getElementById('basket');
  counter++;
  basketElement.innerText = counter;

  var table = document.getElementById('.table');

  items.push({
    title: title,
    price: price,
    id: id,
    count: 1
  });
}
  let itemsIds = '';
  let itemsTitle = '';
  let itemsPrice = '';

  items.forEach((element) => {
    console.log(element)
    itemsIds += items[i].id;
      document.getElementById('itemsList').innerHTML = itemsIds
  }); 
    /*itemsIds += items[i].id;
    itemsTitle += items[i].title;
    itemsPrice += items[i].price;
  
  document.getElementById('itemsList').innerHTML = itemsIds;
  document.getElementById('itemsList').innerHTML = itemsTitle;
  document.getElementById('itemsList').innerHTML = itemsPrice;*/




showLoader(function () {
  hideLoader();
  openPopup();
});


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
