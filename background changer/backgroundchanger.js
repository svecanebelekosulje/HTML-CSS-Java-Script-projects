const darkMode = document.getElementById('darkmode');
const purple = document.getElementById('purple');
const darkblue = document.getElementById('darkblue');
const red = document.getElementById('red');
const pink = document.getElementById('pink');
const title = document.getElementById('title');
const body = document.getElementsByTagName('body')[0];

const changeColor = (event) => {
	switch(event.target.id) {
		case 'darkmode':
		   body.style.backgroundColor = 'black';
		   title.style.color = 'white';
		 break;
		 case 'purple': 
		    body.style.backgroundColor = '#660066';
			title.style.color = 'white';
		 break;
		 case 'darkblue': 
		    body.style.backgroundColor = '#000066';
			title.style.color = 'white';
		 break;
		 case 'red':
		    body.style.backgroundColor = '#800000';
			title.style.color = 'white';
		 break;
		 case 'pink':
		    body.style.backgroundColor = '#660033';
			title.style.color = 'white';
		 break;
		 default:
		    body.style.backgroundColor = '#dddddd';
			title.style.color = 'black';
	}
}

darkMode.addEventListener('click', changeColor);
purple.addEventListener('click', changeColor);
darkblue.addEventListener('click', changeColor);
red.addEventListener('click', changeColor);
pink.addEventListener('click', changeColor);
