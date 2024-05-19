const container = document.getElementById('container');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailAddress = document.getElementById('emailAddress');
const query1 = document.getElementById('query1');
const query2 = document.getElementById('query2');
const message = document.getElementById('message');
const submit = document.getElementById('submit');
const alertElement = document.getElementById('alert');


const turnGreenQuery1 = () => {
	query1.style.backgroundColor = '#cdddd6';
}

const turnGreenQuery2 = () => {
	query2.style.backgroundColor = '#cdddd6';
}


query1.addEventListener('click', turnGreenQuery1);
query2.addEventListener('click', turnGreenQuery2);

const submitButton = () => {
    try {
        if (firstName.value === '' || lastName === '' || emailAddress === '' || message.value === '') {
            alert('One or more fields are empty');
        } else {
            alert(alertElement.innerText); 
        }
    } catch(error) {
        console.error(error);
    }
}

submit.addEventListener('click', submitButton);
