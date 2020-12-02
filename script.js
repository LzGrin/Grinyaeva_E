const countElement = document.getElementById('wrapper');

const appElement = document.getElementById('app');
const rows = [];

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

  constructor() {
    const template = document.getElementById("total");
    const content = document.importNode(template.content, true);
    this.firstNameText = content.querySelector(".product-line");
    const fornWrapper = content.querySelector(".jsRowForm");
    this.form = new form(formWrapper);
    this.form.onNameChange = (name) => {
      this.firstNameText.innerText = name;
      this.onRowChange(name);
    };

    wrapperElement.appendChaild(content);
  }
  set firstName(name) {
    this.firstNameText.innerText = name;
    this.form.firstName = name;
  }

  get firstName() {
    return this.firstNameText.innerText;
  }
}

creatRow = (newName) => {
  const newRow = new rows();
  newRow.onRowChange = (name) => {
    appElement.innerHTML = `
    <div>${name}</div>
    <div>
    ${rows.map((total) => total.firstName)}
    </div>
    `;
  };
  newRowFirstName = newName;
  rows.push(newRow);
};

class popup {

  constructor() {
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

      openPopup();
    }

    
    let closePopup = () => {
      popup.style.visibility = 'hidden';
    }
    closePopup();







    /*function changeCart(title, price, articul) {
      counter++;
      basketElement.innerText = counter;
    
     if (items.has(articul)) {
      items.get(articul).count++;
     } else {
      items.set(articul, {title, price, "count":1});
     } 
      
    }*/



    /*function openPopup() {
      loader.style.visibility = 'visible';
      setTimeout(() => {
        let templete = ``;
        items.forEach(({title, price, count} ) => {
          const {title, price} = element
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
  }
 
}*/

    class count {

    }


    class info {

    }









    /*class Total {
    
      set value(val) {
        this.valueInput.value = isNaN(val) ? 0 : val;
      }
    
      get value() {
        return +this.valueInput.value;
      }
    
    constructor(wrapper) {
      const total = document.getElementById('total');
      const content = document.importNode(total.content, true);
      
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
    new Total(appNode);*/
