const countElement = document.getElementById('wrapper');

const appElement = document.getElementById('app');
const rows = [];
const newPopup = new Popup();
const popup = document.getElementById('popup');
const loader = document.getElementById('loader');

class form {
  constructor(wrapper) {
    const template = document.getElementById("form");
    const content = document.importNode(template.content, true);
    this.firstNameField = comtent.querySelector(".jsFirstName");
    this.firstNameField.NameField.onclick = (event) => {
      this.onNameChange(event.target.value);
    };
    wrapper.appendChild(content);
  }

  set firstName(newFirstName) {
    this.firstNameField.value = newFirstName;
  }
}


class total {

  set firstName(price) {
    this.firstNameText.innerText = price;
    this.form.firstName = price;
  }

  get firstName() {
    return this.firstNameText.innerText;
  }

  constructor() {
    const template = document.getElementById("total");
    const content = document.importNode(template.content, true);
    this.firstNameText = content.querySelector(".product-line");
    
    this.valueInput = content.querySelector('.jsValue');
    this.decreaseButton = content.querySelector('.jsDecrease');
    this.increaseButton = content.querySelector('.jsIncrease');

    this.valueInput.onblur = event => this.value = event.target.value;
    this.increaseButton.onclick = () => this.increase();
    this.decreaseButton.onclick = () => this.decrease();

    wrapperElement.appendChaild(content);
  }

  increase() {
    this.value++;
  }

  decrease() {
    this.value--;
  }
}
    let formWrapper = content.querySelector(".jsRowForm");
    this.form = new form(formWrapper);
    this.form.onNameChange = (price) => {
    this.firstNameText.innerText = price;
    this.onRowChange(price);
    };

    
  

 

creatRow = (newPrice) => {
  const newRow = new rows();
  newRow.onRowChange = (price) => {
    appElement.innerHTML = `
    <div>${price}</div>
    <div>
    ${rows.map((total) => total.firstName)}
    </div>
    `;
  };
  newRowFirstPrice = newPrice;
  rows.push(newRow);
};

class Popup {

  constructor() {
    let counter = 0;
    const itemsList = document.getElementById('itemsList');
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

    }
    changeCart(title, price, articul);
  }

    let openPopup = () => {
      loader.style.visibility = 'visible';
      setTimeout(() => {
        let templete = ``;
        items.forEach(({ title, price, count }) => {
          const { title, price } = element
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


      }, 2000);

      openPopup();
    }
    
    let newPopup = new Popup(title, price, articul);
  
  
    
    let closePopup = () => {
      popup.style.visibility = 'hidden';
    }
    closePopup();



class info {
}
