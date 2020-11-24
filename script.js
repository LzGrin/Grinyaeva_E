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
          <div class="app"></div>
         
				<div class ="count" >
				  <button type="button" class="jsDecrease">-</button>
				  <input type="text" class="jsValue" value="${count}">
				  <button type="button" class="jsIncrease">+</button>
				</div>
        </div>
        <div class="product-line-item">${price}</div>
          
          

       `;
     
    
     });
    
    itemsList.innerHTML = templete;
    loader.style.visibility = 'hidden';
    popup.style.visibility = 'visible';
    
    
  }, 2000);
}

class Total {

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
new Total(appNode);


function closePopup() {
  popup.style.visibility = 'hidden';
}

