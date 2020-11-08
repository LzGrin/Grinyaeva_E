var button = document.querySelector('.box');
var counter = 0;
var itemsList = document.getElementById('itemsList');
var popup = document.getElementById('.popup');
var close = document.getElementById('.close');
var ids = [];
var items = [];
var load = document.getElementById('.loader_inner');
var loader = document.getElementById('.loader');

async function changeCart(product, price, id) {
  /*document.querySelector('.box').style.background = "red";*/
  if (document.querySelector('.box').addEventListener('click', openPopup, itemsList))  {
  /*if (document.getElementById(".loader")) {*/
    if (document.getElementById('.loader_inner').style.display = "block") {
      document.getElementById('.loader_inner').style.display = "block", delay(5000);
    }
    else document.getElementById('.loader_inner').style.display = "none";
    };
}
    counter++;
    document.getElementById('basket').innerText = counter;
    items.push({
      title: product,
      price: price,
      id: id
    });
    document.getElementById('itemsList').innerHTML = items;
  let itemsIds = '';

  for (let i = 0; i < items.length; i++) {
    itemsIds += items[i].title;
  }

  document.getElementById('.cart').addEventListener('click', openPopup, popup); {
  };
    function openPopup() {
    document.getElementById('.popup').style.visibility = 'visible';
    document.getElementById('.close').style.visibility = 'hidden';
    }
  
