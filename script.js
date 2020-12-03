const countElement = document.getElementById('wrapper');

const appElement = document.getElementById('app');
const rows = [];

class Row {
  constructor(wrapper) {
    const row = document.getElementById("row");
    const content = document.importNode(row.content, true);

    this.priceTotalField = comtent.querySelector(".jsPriceTotal");
    this.priceTotalField.PriceField.onblur = (event) => {
      this.onNameChange(event.target.value);
    }
      this.products = content.querySelector(".product-line");
    
    new Counter(infoCounter);
    this.form.onNameChange = (price) => {
      this.firstNameText.innerText = price;
      this.onRowChange(price);
    };
    wrapper.appendChild(content);
   
    };

    set priceTotal(newPriceTotal) {
    this.priceTotalField.value = newPriceTotal;
  }
}



class Counter {

  constructor(infoCounter) {
    const counter = document.getElementById("counter");
    const content = document.importNode(counter.content, true);

    infoCounter.appendChaild(content);
  }

  set firstName(name) {
    this.firstNameText.innerText = name;
    this.form.firstName = name;
  }

  get firstName() {
    return this.firstNameText.innerText;
  }


creatRow = (newPrice) => {
  const newRow = new rows();
  newRow.onRowChange = (price) => {
    NewPrice.innerHTML = `
    <div>${price}</div>
    <div>
    ${rows.map((total) => total.firstName)}
    </div>
    `;
  };
  newRowFirstName = newPrice;
  rows.push(newRow);
};
}


class Popup {

  constructor() {
    const wrapper = document.querySelector('.wrapper');
    new Row(wrapper);
  }
}
    let counter = 0;
    const itemsList = document.getElementById('itemsList');
    let items = new Map();
    const basketElement = document.getElementById('basket-counter');
    const popup = document.getElementById('popup');
    const loader = document.getElementById('loader');

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
    }
      openPopup();


    let closePopup = () => {
      popup.style.visibility = 'hidden';
    }
    closePopup();

