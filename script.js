const wrapperElement = document.getElementById("wrapper");
let newPopup;
const appNode = document.querySelector('.app');

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

    this.valueInput.onblur = event => this.value = event.target.value;
    this.increaseButton.onclick = () => this.increase();
    this.decreaseButton.onclick = () => this.decrease();

    wrapper.appendChild(content);
  }

  increase() {
    this.value++;
  }

  decrease() {
    this.value--;
  }

}


/*new Counter(appNode);
 
const counter = new Counter(appNode);
counter.value = 25;
counter.increase();*/

class Row {

  constructor(row) {
    const template = document.getElementById('row');
    const content = document.importNode(template.content, true);
    this.price = content.querySelector(".price");

    const counter = content.querySelector(".counter");
    this.newCounter = new Counter(counter);

    row.appendChild(content);
  }
}


class Popup {

  constructor(popup) {
    let newPopupRow = document.getElementById("jsPopup");
    const content = document.importNode(newPopupRow.content, true);

    const newRow = content.querySelector(".jsRowPopup");
    this.newRowPopup = new Row(newRow);

    popup.appendChild(content);

  }
  close() {
    closePopup();
  }
}

function openPopup()  {

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

changeCart(title, price, articul);
