const addToCartBtn = document.getElementById('add');
const cart = document.getElementById('cart');
const plusBtn = document.getElementById('plus');
const numOfItems = document.getElementById('numOfItems');
const minusBtn = document.getElementById('minus');
const productImage0 = document.getElementById('productImage0');
const clickOnImage = document.getElementById('clickonimage');
const container = document.getElementById('container');
const clickOnImage2 = document.getElementById('clickonimage2');
const clickOnImage3 = document.getElementById('clickonimage3');
const clickOnImage4 = document.getElementById('clickonimage4');
const previousIcon = document.getElementsByClassName('previous');
const nextIcon = document.getElementsByClassName('next');
const productImage1 = document.getElementById('productImage1');
const productImage2 = document.getElementById('productImage2');
const productImage3 = document.getElementById('productImage3');
const productImage4 = document.getElementById('productImage4');
const emptyCart = document.getElementById('cartEmpty');
const filledCart = document.getElementById('cartFilled');
const totalPrice = document.getElementById('totalprice');
const priceValue = document.getElementById('pricevalue');
let quantity = 0;
const addingItems = (event) => {
	if (event.target.id === 'plus') {
		quantity++;
	} else if (event.target.id === 'minus' && quantity !== 0) {
		quantity--;
	}
	
	if (quantity === 0) {
		minusBtn.disabled = true;
	} else {
		minusBtn.disabled = false;
	}
	
	numOfItems.innerHTML = quantity;
}

plusBtn.addEventListener('click', addingItems);
minusBtn.addEventListener('click', addingItems);

const clickOnImage0 = () => {
	clickOnImage.style.display = 'flex';
	container.style.display = 'none';
}

productImage0.addEventListener('click', clickOnImage0);

const nextIconOnclick = () => {
	if (clickOnImage.style.display === 'flex') {
		clickOnImage2.style.display = 'flex';
		clickOnImage.style.display = 'none';
	} else if (clickOnImage2.style.display === 'flex') {
		clickOnImage3.style.display = 'flex';
		clickOnImage2.style.display = 'none';
	} else if (clickOnImage3.style.display === 'flex') {
		clickOnImage4.style.display = 'flex';
		clickOnImage3.style.display = 'none';
	} else if (clickOnImage4.style.display === 'flex') {
		container.style.display = 'flex';
		clickOnImage4.style.display = 'none';
	}
}


Array.from(nextIcon).forEach(element => {
	element.addEventListener('click', nextIconOnclick);
});

const previousIconOnclick = () => {
	if (clickOnImage4.style.display === 'flex') {
		clickOnImage3.style.display = 'flex';
		clickOnImage4.style.display = 'none';
	} else if (clickOnImage3.style.display ==='flex') {
		clickOnImage2.style.display = 'flex';
		clickOnImage3.style.display = 'none';	
	} else if (clickOnImage2.style.display ==='flex') {
		clickOnImage.style.display = 'flex';
		clickOnImage2.style.display = 'none';
	} else if (clickOnImage.style.display === 'flex') {
		container.style.display = 'flex';
		clickOnImage.style.display = 'none';
	}
}


Array.from(previousIcon).forEach(element => {
	element.addEventListener('click', previousIconOnclick);
});


const displayTotalPrice = () => {
  let numItems = parseInt(numOfItems.innerText);
  let sumOfValues = 125 * parseInt(numOfItems.innerText);
  let total = `$125.00 x ${numItems} $${sumOfValues.toFixed(2)}`;
  totalPrice.textContent  = total;
}


const cartFunction = () => {
	if (numOfItems.innerText === '0') {
		emptyCart.style.display = 'block';
		filledCart.style.display = 'none';
	} else if (numOfItems.innerText !== '0'){
		emptyCart.style.display = 'none';
		filledCart.style.display = 'block';	
		displayTotalPrice();
	}
}


const hideCartFunction = () => {
	emptyCart.style.display = 'none';
	filledCart.style.display = 'none';
}

cart.addEventListener('mouseenter', cartFunction);
cart.addEventListener('mouseout', hideCartFunction);
