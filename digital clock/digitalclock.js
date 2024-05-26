const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const updateTime = () => {
	let now = new Date();
	let hoursDisplay = now.getHours().toString().padStart(2, '0');
	let minutesDisplay = now.getMinutes().toString().padStart(2, '0');
	let secondsDisplay = now.getSeconds().toString().padStart(2, '0');
	hours.innerHTML = hoursDisplay;
        minutes.innerHTML = minutesDisplay;
        seconds.innerHTML = secondsDisplay;
	
}


updateTime();

setInterval(updateTime, 1000);
