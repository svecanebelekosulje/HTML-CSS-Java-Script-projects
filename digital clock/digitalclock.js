const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const updateTime = () => {
	let now = new Date();
	let hoursDisplay = now.getHours();
	let minutesDisplay = now.getMinutes();
	let secondsDisplay = now.getSeconds();
	hours.innerHTML = hoursDisplay;
    minutes.innerHTML = minutesDisplay;
    seconds.innerHTML = secondsDisplay;
	
}


updateTime();

setInterval(updateTime, 1000);
