/*var button = document.querySelector('.box');
var counter = 0;
var itemsList = document.getElementById('itemsList');
var popup = document.getElementById('popup');
var close = document.getElementById('close');
var ids = [];
var items = [];
var load = document.getElementById('loader_inner');
var loader = document.getElementById('loader');

async function changeCart(product, price, id) {
  document.querySelector('.box').style.background = "red";
  document.querySelector('box').addEventListener('click', openPopup, loader_inner);{
  	document.getElementById('loader_inner').style.display = "block"; 
  	setTimeout("Counter()", 5000);
  	document.getElementById('basket').addEventListener('click', openPopup, popup);
 }
}

  /*if (document.getElementById(".loader")) {*/
    /*if (document.getElementById('loader_inner').style.display = "block") {
      document.getElementById('loader_inner').style.display = "block", delay(5000);
    }
    else document.getElementById('loader_inner').style.display = "none";
    };
function Counter() {
	document.getElementById('loader_inner').style.display = "none"; 
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

}

 /* document.getElementById('basket').addEventListener('click', openPopup, popup); {
  };
    function openPopup() {
    document.getElementById('popup').style.visibility = 'visible';
    document.getElementById('close').style.visibility = 'hidden';
    }*/

    var counter = 0;
    var products = {};

    function changeCart(title, price, id) {
    	var basketElement = document.getElementById('basket');
    	counter++;
    	basketElement.innerText = counter;
    	var product = products[id];
    	if (product) {
    		product.counter++;
    	}else {
    		products[id] = {
    			title: title,
    			price: price,
    			id: id,
    			count: 1
    		};
    	}

    	updatePopupData();
    	showLoader(function() {
    		hideLoader();
    		openPopup();
    	});
    	}
    	function updatePopupData() {
    		let itemsList = document.getElementById('itemsList');
    		}
    		function openPopup() {
    			var popup = document.getElementById('popup');
    			popup.style.visibility = 'visible';
    		  	}

    function closePopup() {
    	var popup - document.getElementById('popup');
    	popup.style.visibility = 'hidden';
    }

    function showLoader(callback) {
    	var loader = document.getElementById('loader_inner');
    	loader.style.visibility = 'visible';
    	setTimeout(callback, 5000);
    }

    function hideLoader() {
    	var loader = document.getElementById('loader');
    	loader.style.visibility = 'hidden';
    }

    function Test() {
    	alert("работает");
    }
