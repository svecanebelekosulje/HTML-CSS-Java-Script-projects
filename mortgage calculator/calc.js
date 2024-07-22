const calculateBtn = document.getElementById('calculate');
const clearBtn = document.getElementById('clear');
const amountInput = document.getElementById('amount');
const termInput = document.getElementById('term');
const rateInput = document.getElementById('rate');
const type1 = document.getElementById('type1');
const type2 = document.getElementById('type2');
const requiredNum1 = document.getElementById('required1');
const requiredNum2 = document.getElementById('required2');
const requiredNum3 = document.getElementById('required3');
const requiredNum4 = document.getElementById('required4');
const rightSide = document.getElementById('right')
const results = document.getElementById('results');
const right01 = document.getElementById('right01');
const monthlyRepayment = document.getElementById('monthlyrepayments');
const totalRepayment = document.getElementById('totalrepayment');

const showResults = () => {
	  right01.style.display = 'none';
      results.style.display = 'block';
}

const clickOnCalculateBtn = () => {
 requiredNum1.style.display = 'none';
  requiredNum2.style.display = 'none';
  requiredNum3.style.display = 'none';
  requiredNum4.style.display = 'none';

 
  if (amountInput.value === '') {
    requiredNum1.style.display = 'block';
  }

  if (termInput.value === '') {
    requiredNum2.style.display = 'block';
  }

  if (rateInput.value === '') {
    requiredNum3.style.display = 'block';
  }

  if (event.target.id !== 'type1' && event.target.id !== 'type2') {
    requiredNum4.style.display = 'block';
  }
  
  if (amountInput.value !== '' && 
    termInput.value !== '' && 
    rateInput.value !== '' && 
    (event.target.id === 'type1' || 'type2')) {
  showResults();
  requiredNum1.style.display = 'none';
  requiredNum2.style.display = 'none';
  requiredNum3.style.display = 'none';
  requiredNum4.style.display = 'none';
}
}

calculateBtn.addEventListener('click', clickOnCalculateBtn);


const clickOnClearBtn = (event) => {
	amountInput.value = '';
	termInput.value = '';
	rateInput.value = '';
	event.target.id !== 'type1' && 'type2';
}

clearBtn.addEventListener('click', clickOnClearBtn);


let month = '$' + (rateInput.value * 100 ) / (rateInput.value * 2) * amountInput.value;
monthlyRepayment.innerHTML = month;


let total = '$' + amountInput.value * (1 + rateInput.value) + termInput.value;
totalRepayment.innerHTML = total
