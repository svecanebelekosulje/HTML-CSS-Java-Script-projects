const subscribeButton = document.getElementById('subscribe');
const dismiss = document.getElementById('dismiss');
const container = document.getElementById('container');
const messageContainer = document.getElementById('message-container');
const email = document.getElementById('email'); 

const whenSubscribe = () => {
    if (email.value !== '') {
		 messageContainer.style.display = 'block';
         container.style.display = 'none'; 
        
    } else {
        alert("You did not enter your email address");
    }
}

const whenDismiss = () => {
	     container.style.display = 'flex'; 
	     messageContainer.style.display = 'none';
         
}

subscribeButton.addEventListener('click', whenSubscribe);
dismiss.addEventListener('click', whenDismiss);
