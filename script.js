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

const appNode = document.querySelector('.app');
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
const wrapperElement = document.getElementById("wrapper");
const newPopup = new Popup(wrapperElement);

class Popup {

    constructor(popup) {
        const newPopup = document.getElementById("jsPopup");
        const content = document.importNode(newPopup.content, true);

        const newRow = content.getElementById("jsRowPopup");
        this.newRowPopup = new Row(newRow);

        popup.appendChild(content);

    }
}

