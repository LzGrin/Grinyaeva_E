   var button = document.querySelector('.box');
   var counter = 0; 
   var itemsList = document.getElementById('itemsList');
   var popup = document.getElementById('popup');
   var close = document.getElementById('close');
   var ids = [];
   var items = [];
   var load = document.getElementById('loader_inner');

  function changeCart(product, price, id) {
    /*document.querySelector('.box').style.background = "red";*/
    counter++;
    document.getElementById('basket').innerText = counter;

    items.push({
    	title: product,
    	price: price,
      id: id
    });
      
    document.getElementById('itemsList').innerHTML = items;
    let itemsIds = '';

    for(let i = 0; i < items.length; i++) {
      itemsIds +=items[i].id;
    }
}
  

  function openPopup() {
    document.getElementById('popup').style.visibility = 'visible';
    document.getElementById('close').style.visibility = 'close';
  };

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
  
function asyncChangeCart ()  {
  /*console.log('Clicked');*/

  document.getElementById(".loader_inner").fadeOut();
  document.getElementById(".loader_inner").delay(5000).fadeOut("slow");

};
/*setTimeout(function onTimeout () {
  document.getElementById(".loader_inner").fadeOut();
  document.getElementById(".loader").delay(5000).fadeOut("slow");
}, 5000);
};*/