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
}

var itemProduct = document.querySelectorAll('.product'),
  cartCont = document.getElementById('cart_content');

function addEventListener(elem, type, handler) {
  if (elem.addEventListener) {
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on' + type, function() {
      handler.call(elem);
    });
  }
  return false;
}

function getCartData() {
  return JSON.parse(localStorage.getItem('popup'));
}

function setCartData(o) {
  localStorage.setItem('popup', JSON.stringify(o));
  return false;
}

function addToCart(e) {
  this.disable = true;
  var cartData = getCartData() || {},
    parentProduct = this.parentNode,
    itemId = this.getAttribute('data-id'),
    itemTitle = parentProduct.querySelector('.product-title').innerHTML,
    itemPrice = parentProduct.querySelector('.product-price').innerHTML;
  if (cartData.hasOwnProperty(itemId)) {
    cartData[itemId][2] += 1;
  } else {
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if (!setCartData(cartData)) {
    this.disabled = false;
  }
  return false;
}

for (var i = 0; i < itemProduct.length; i++) {
  addEvent(itemProduct[i].querySelector('.add_item'), 'click', addToCart);
}

function openPopup(e) {
  var cartData = getCartData(),
    totalItems = '';
  if (cartData !== null) {
    totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Количество</th></tr>';
    for (var items in cartData) {
      totalItems += '<tr>';
      for (var i = 0; i < cartData[items].length; i++) {
        totalItems += '<td>' + cartData[items][i] + '</td>';
      }
      totalItems += '</tr>';
    }
    totalItems += '</table>';
    cartCont.innerHTML = totalItems;
  } else {
    cartCont.innerHTML = 'Корзина пуста!';
  }
  return false;
}

addEventListener(document.getElementById('checkout'), 'click', changeCart);
addEventListener(document.getElementById('clear_cart'), 'click', function(e){
  localStorage.removeItem('.popup-list');
  cartCont.innerHTML = 'Корзина очищена.';
});


showLoader(function () {
  hideLoader();
  openPopup();
});

/*function updatePopupData() {
  let itemsList = document.getElementById('itemsList');

  itemsList.innerHTML = '';

  for (let id in products) {
    let product = products[id];
    let basketItem = document.createElement("itemsList");
    basketItem.classList.add('basket-item');
    basketItem.innerText = items[i].product - title;
    basketItem.innerText = items[i].product-price;

    element.appendChild(itemsList);
  }
}*/
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
