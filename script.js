const wrapperElement = document.getElementById("wrapper");
let newPopup;
let counter = 0;
let basketElement = document.getElementById('basket-counter');
let items = new Map();
​
class Counter {
​
  set value(val) {
    this.valueInput.value = isNaN(val) ? 0 : val;
  }
​
  get value() {
    return +this.valueInput.value;
  }
​
  constructor(wrapper) {
    const template = document.getElementById('counterTemplate');
    const content = document.importNode(template.content, true);
​
    this.valueInput = content.querySelector('.jsValue');
    this.decreaseButton = content.querySelector('.jsDecrease');
    this.increaseButton = content.querySelector('.jsIncrease');
​
    this.valueInput.onblur = (event) => {
      this.onCountChange(event.target.value);
      this.value = event.target.value;
    };
    this.increaseButton.onclick = () => this.increase();
    this.decreaseButton.onclick = () => this.decrease();
​
    wrapper.appendChild(content);
  }
​
  increase() {
    this.value++;
    this.onCountChange(this.value);
  }
​
  decrease() {
    this.value--;
    this.onCountChange(this.value);
  }
​
}
​
class Row {
​
  constructor(row, product) {
    this.product = product;
​
    const template = document.getElementById('row');
    const content = document.importNode(template.content, true);
​
    this.rowElement = content.querySelector('.row');
​
    const nameElement = content.querySelector(".name");
    nameElement.innerText = product.title;
​
    this.priceElement = content.querySelector(".price");
    this.priceElement.innerText = product.price;
​
    const counterElement = content.querySelector(".counter");
    this.counter = new Counter(counterElement);
    this.counter.value = product.count;
    this.counter.onCountChange = (count) => {
      this.priceElement.innerText = this.product.price * count;
      this.product.count = count;
      this.onRowChange(this.product);
    };
​
    this.deleteControl = content.querySelector(".delete");
    this.deleteControl.onclick = () => this.delete();
​
    row.appendChild(content);
  }
​
  delete() {
    this.onRowDelete(this.product);
    this.rowElement.innerHTML = "";
  }
}
​
class Popup {
​
  constructor(popup) {
    let newPopupRow = document.getElementById("popup");
    const content = document.importNode(newPopupRow.content, true);
​
    const newRowElement = content.querySelector(".popup-list");
​
    popup.appendChild(content);
​
    items.forEach((product) => {
      this.newRow = new Row(newRowElement, product);
      this.newRow.onRowChange = (product) => {
        items.set(product.articul, product);
      };
      this.newRow.onRowDelete = (product) => {
        items.delete(product.articul);
        counter = counter - product.count;
        basketElement.innerText = counter;
      };
    });
  }
  close() {
    closePopup();
  }
}
​
function openPopup() {
  newPopup = new Popup(wrapperElement);
}
​
function closePopup() {
  newPopup = null;
  wrapperElement.innerHTML = "";
}
​
let changeCart = (title, price, articul) => {
  counter++;
  basketElement.innerText = counter;
​
  if (items.has(articul)) {
    items.get(articul).count++;
  } else {
    items.set(articul, { title, price, "count": 1 , articul});
  }
};
