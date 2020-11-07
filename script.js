var button = document.querySelector('.box');
var counter = 0;
var itemsList = document.getElementById('itemsList');
var popup = document.getElementById('popup');
var close = document.getElementById('close');
var ids = [];
var items = [];
var load = document.getElementById('.loader_inner');
var loader = document.getElementById('.loader');

async function changeCart(product, price, id) {
  /*document.querySelector('.box').style.background = "red";*/
  document.querySelector('.box').addEventListener('click' => {
  if (document.getElementById(".loader")) {
    document.getElementById('.loader_inner').style.display != "block") {
      document.getElementById('.loader_inner').style.display != "block", delay(5000);
    }
    else document.getElementById('.loader_inner').style.display = "none";
  
  });
}
    counter++;
    document.getElementById('basket').innerText = counter;
    items.push({
      title: product,
      price: price,
      id: id
    });
    document.getElementById('itemsList').innerHTML = items;
  let itemsIds = '';

  for (let i = 0; i < items.length; i++) {
    itemsIds += items[i].title;
  }

  

  function openPopup() {
    document.getElementById('popup').style.visibility = 'visible';
    document.getElementById('close').style.visibility = 'hidden';
  };
}
  console.log(changeCart)



/*var loading = document.getElementById('cart');

  document.getElementById('cart').addEventListener('click', l => {
    l.
  });*/

/*$(button).load (function() {
  document.querySelector('.box').addEventListener('click') ; {
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
  }
});*/
 
/*async function loader() {
  if (button = document.querySelector('.box').addEventListener('click')) {
    document.getElementById(".loader_inner").delay(5000).fadeOut("slow");
  } else {
    document.getElementById(".loader_inner").fadeOut();
  };
}

setTimeout(function onTimeout () {
  document.getElementById(".loader_inner").fadeOut();
  document.getElementById(".loader").delay(5000).fadeOut("slow");
}, 5000);
};*/
