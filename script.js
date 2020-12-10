const wrapperElement = document.getElementById("wrapper");
let newPopup;
const appNode = document.querySelector('.app');
let counter;
let basketElement = document.getElementById('basket-counter');
let items = new Map();
const textCounter = document.getElementById("newCounter");


class Counter {

  set value(val) {
    this.valueInput.value = isNaN(val) ? 0 : val;
  }

  get value() {
    return +this.valueInput.value;
  }

  constructor(wrapper) {
    const template = document.getElementById('counterTemplate');
    const content = document.importNode(template.content, true);

    this.valueInput = content.querySelector('.jsValue');
    this.decreaseButton = content.querySelector('.jsDecrease');
    this.increaseButton = content.querySelector('.jsIncrease');

    this.valueInput.onblur = (event) => {
      this.onCountChange(event.target.value);
      this.value = event.target.value;
    };
    this.increaseButton.onclick = () => this.increase();
    this.decreaseButton.onclick = () => this.decrease();



    wrapper.appendChild(content);
  }

  increase() {
    this.value++;
    this.onCountChange(value);
  }

  decrease() {
    this.value--;
    this.onCountChange(value);
  }

}

// new Counter(appNode);

/*const counter = new Counter(appNode);
counter.value = 25;
counter.increase();*/

class Row {

  constructor(row, product) {
    const template = document.getElementById('row');
    const content = document.importNode(template.content, true);
    this.price = content.querySelector(".price");

    const counter = content.querySelector(".counter");
    // this.newCounter = new Counter(counter);

    const name = content.querySelector(".product");
    name.innerText = product.title;

    const price = content.querySelector(".price");
    price.innerText = product.price;

    this.newCounter.value = product.count;

    this.newCounterText = content.querySelector(".product");
    const counterWrapper = content.querySelector(".counter");
    this.counter = new Counter(counterWrapper);
    this.counter.onCountChange = (count) => {
      this.newCounterText.innerText = count;
      this.onRowChange(count);
    };
    row.appendChild(content);
  }
}


class Popup {

  constructor(popup) {
    let newPopupRow = document.getElementById("popup");
    const content = document.importNode(newPopupRow.content, true);

    const newRow = content.querySelector(".popup-list");
    // this.newRowPopup = new Row(newRow);

    popup.appendChild(content);

    items.forEach((product) => {
      let newRowPopup = new Row(newRow, product);
    });
  }
  close() {
    closePopup();
  }
}

function openPopup() {

  newPopup = new Popup(wrapperElement);

}

function closePopup() {
  newPopup = null;
  wrapperElement.innerHTML = "";
}

let changeCart = (title, price, articul) => {
  counter++;
  basketElement.innerText = counter;

  if (items.has(articul)) {
    items.get(articul).count++;
  } else {
    items.set(articul, { title, price, "count": 1 });
  }

}
