const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const q1img = document.getElementById('q1img');
const q2img = document.getElementById('q2img');
const q3img = document.getElementById('q3img');
const q4img = document.getElementById('q4img');
const errorMessage = document.getElementById('error');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
	
const displayAnswer1 = () => {
	if (a1.style.display === 'none') {
		a1.style.display = 'block';
	} else {
		a1.style.display = 'none';
	}
}

const displayAnswer2 = () => {
	if (a2.style.display === 'none') {
		a2.style.display = 'block';
	} else {
		a2.style.display = 'none';
	}
}

const displayAnswer3 = () => {
	if (a3.style.display === 'none') {
		a3.style.display = 'block';
	} else {
		a3.style.display = 'none';
	}
}

const displayAnswer4 = () => {
	if (a4.style.display === 'none') {
		a4.style.display = 'block';
	} else {
		a4.style.display = 'none';
	}
}

q1.addEventListener('click', displayAnswer1)
q2.addEventListener('click', displayAnswer2)
q3.addEventListener('click', displayAnswer3)
q4.addEventListener('click', displayAnswer4)

const displayError = () => {
  const errorMessageElement = errorMessage;
  errorMessageElement.style.display = 'block';
  errorMessageElement.style.fontSize = '20px';
  errorMessageElement.style.padding = 'none'
}

const checkEmail = () => {
  if (email.value.includes('@gmail.com')) {
    error.style.display = 'none';
  } else {
    displayError('Invalid email address. Please enter a valid @gmail.com email.');
  }
}

submit.addEventListener('click', checkEmail);
