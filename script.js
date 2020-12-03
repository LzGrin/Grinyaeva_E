let counter = 0;

let items = new Map();
const basketElement = document.getElementById('basket-counter');


let changeCart = (title, price, articul) => {
  counter++;
  basketElement.innerText = counter;

  if (items.has(articul)) {
    items.get(articul).count++;
  } else {
    items.set(articul, { title, price, "count": 1 });
  }

changeCart(title, price, articul);
  }

let openPopup = () => {
  loader.style.visibility = 'visible';
  
  openPopup();
}




  class Popup {

    row() {

    }
  }

  class Counter {

    set value(val) {
      this.valueInput.value = isNaN(val) ? 0 : val;
    }

    get value() {
      return +this.valueInput.value;
    }

    constructor() {

      const count = document.getElementById('count');
      const content = document.importNode(count.content, true);


      this.valueInput = content.querySelector('.jsValue');
      this.decreaseButton = content.querySelector('.jsDecrease');
      this.increaseButton = content.querySelector('.jsIncrease');

      this.valueInput.onblur = event => this.value = event.target.value;
      this.increaseButton.onclick = () => this.increase();
      this.decreaseButton.onclick = () => this.decrease();

      count.appendChild(content);
    }
    increase() {
      this.value++;
    }

    decrease() {
      this.value--;
    }


  }

  const appNode = document.querySelector('.app');
  new Counter(appNode);

  const counter = new Counter(appNode);
  counter.increase();


  class Product {

    constructor(row) {
      const row = document.getElementById('row');
      const content = document.importNode(row.content, true);

      this.product = content.querySelector('.product');
      this.count = content.
      const itemsList = document.getElementById('itemsList');
  }

  setTimeout()  {
    let row = ``;
    items.forEach(({ title, price, count }) => {
      const { title, price } = element
      row += `
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


  }, 2000;
  
  }
