const question1 = document.getElementById('q1');
const question2 = document.getElementById('q2');
const question3 = document.getElementById('q3');
const question4 = document.getElementById('q4');
const image1 = document.getElementById('a1image');
const image2 = document.getElementById('a2image');
const image3 = document.getElementById('a3image');
const image4 = document.getElementById('a4image');
const answer1 = document.getElementById('a1');
const answer2 = document.getElementById('a2');
const answer3 = document.getElementById('a3');
const answer4 = document.getElementById('a4');

const clickOnPlus = () => {
	  if (answer1.style.display === 'none') {
    image1.src = 'file:///C:/Users/STRONG/Downloads/faq-accordion-main/assets/images/icon-minus.svg';
    answer1.style.display = 'block';
  } else {
    image1.src = 'file:///C:/Users/STRONG/Downloads/faq-accordion-main/assets/images/icon-plus.svg';
    answer1.style.display = 'none';
  }
}

const clickOnPlus2 = () => {
	  if (answer2.style.display === 'none') {
    image2.src = 'file:///C:/Users/STRONG/Downloads/faq-accordion-main/assets/images/icon-minus.svg';
    answer2.style.display = 'block';
  } else {
    image2.src = 'file:///C:/Users/STRONG/Downloads/faq-accordion-main/assets/images/icon-plus.svg';
    answer2.style.display = 'none';
  }
}

const clickOnPlus3 = () => {
	  if (answer3.style.display === 'none') {
    image3.src = 'file:///C:/Users/STRONG/Downloads/faq-accordion-main/assets/images/icon-minus.svg';
    answer3.style.display = 'block';
  } else {
    image3.src = 'file:///C:/Users/STRONG/Downloads/faq-accordion-main/assets/images/icon-plus.svg';
    answer3.style.display = 'none';
  }
}

const clickOnPlus4 = () => {
	  if (answer4.style.display === 'none') {
    image4.src = 'file:///C:/Users/STRONG/Downloads/faq-accordion-main/assets/images/icon-minus.svg';
    answer4.style.display = 'block';
  } else {
    image4.src = 'file:///C:/Users/STRONG/Downloads/faq-accordion-main/assets/images/icon-plus.svg';
    answer4.style.display = 'none';
  }
}
question1.addEventListener('click', clickOnPlus);
question2.addEventListener('click', clickOnPlus2);
question3.addEventListener('click', clickOnPlus3);
question4.addEventListener('click', clickOnPlus4);
