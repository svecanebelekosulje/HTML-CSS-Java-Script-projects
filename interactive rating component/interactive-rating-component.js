const container = document.getElementById('container');
const btnOne = document.getElementById('one');
const btnTwo = document.getElementById('two');
const btnThree = document.getElementById('three');
const btnFour = document.getElementById('four');
const btnFive = document.getElementById('five');
const submitBtn = document.getElementById('submit');
const thankYouMessage = document.getElementById('thankYouMessage');
const selectingResult = document.getElementById('selectingResult');

const clickOnButtonOne = () => {
	btnOne.style.backgroundColor = '#ffffff';
	btnOne.style.color = '#000000';
	selectingResult.innerHTML = '1';
	if (!isButtonActive()) {
        disableButtonsExcept(btnOne);
	}
}

btnOne.addEventListener('click', clickOnButtonOne);

const clickOnButtonTwo = () => {
	btnTwo.style.backgroundColor = '#ffffff';
	btnTwo.style.color = '#000000';
	selectingResult.innerHTML = '2';
	if (!isButtonActive()) {
        disableButtonsExcept(btnTwo);
		
	}
}

btnTwo.addEventListener('click', clickOnButtonTwo);


const clickOnButtonThree = () => {
	btnThree.style.backgroundColor = '#ffffff';
	btnThree.style.color = '#000000';
	selectingResult.innerHTML = '3';
	if (!isButtonActive()) {
        disableButtonsExcept(btnThree);
	}
}

btnThree.addEventListener('click', clickOnButtonThree);

const clickOnButtonFour = () => {
	btnFour.style.backgroundColor = '#ffffff';
	btnFour.style.color = '#000000';
	selectingResult.innerHTML = '4';
	if (!isButtonActive()) {
        disableButtonsExcept(btnFour);
	}
}

btnFour.addEventListener('click', clickOnButtonFour);

const clickOnButtonFive = () => {
	btnFive.style.backgroundColor = '#ffffff';
	btnFive.style.color = '#000000';
	selectingResult.innerHTML = '5';
	if (!isButtonActive()) {
        disableButtonsExcept(btnFive);
	}
}

btnFive.addEventListener('click', clickOnButtonFive);

const clickOnSubmitButton = () => {
	thankYouMessage.style.display = 'block';
	container.style.display = 'none';
}
