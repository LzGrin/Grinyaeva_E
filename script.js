let counter = 0;
const itemsList = document.getElementById('itemsList');
let items = new Map();
const basketElement = document.getElementById('basket-counter');
const popup = document.getElementById('popup');
const loader = document.getElementById('loader');

function changeCart(title, price, articul) {
  counter++;
  basketElement.innerText = counter;

 if (items.has(articul)) {
  items.get(articul).count++;
 } else {
  items.set(articul, {title, price, "count":1});
 } 
  
}



function openPopup() {
  loader.style.visibility = 'visible';
  setTimeout(() => {
    let templete = ``;
    items.forEach(({title, price, count} ) => {
      /*const {title, price} = element*/
      templete += `
          <div class="product-line">
          <div class="product-line-item">${title}</div>
          <div class="product-line-item">${price}</div>
          <div class="product-line-item">${count}</div>
          </div>
       `;
     });
    itemsList.innerHTML = templete;
    loader.style.visibility = 'hidden';
    popup.style.visibility = 'visible';
  }, 5000);
}

function closePopup() {
  popup.style.visibility = 'hidden';
}
