const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const blog = document.getElementById('blog');
const careers = document.getElementById('careers');
const article1 = document.getElementById('article1');
const article2 = document.getElementById('article2');
const article3 = document.getElementById('article3');
const article4 = document.getElementById('article4');

const homeUnderline = () => {
	home.style.borderBottom = '4px solid #004d2e'
}

const hideBorder1 = () => {
	home.style.borderBottom = 'none'
}

const aboutUnderline = () => {
	about.style.borderBottom = '4px solid #004d2e'
}

const hideBorder2 = () => {
	about.style.borderBottom = 'none'
}

const contactUnderline = () => {
	contact.style.borderBottom = '4px solid #004d2e'
}

const hideBorder3 = () => {
	contact.style.borderBottom = 'none'
}

const blogUnderline = () => {
	blog.style.borderBottom = '4px solid #004d2e'
}

const hideBorder4 = () => {
	blog.style.borderBottom = 'none'
}

const careersUnderline = () => {
	careers.style.borderBottom = '4px solid #004d2e'
}

const hideBorder5 = () => {
	careers.style.borderBottom = 'none'
}
home.addEventListener('mouseover', homeUnderline);
home.addEventListener('mouseout', hideBorder1);
about.addEventListener('mouseover', aboutUnderline);
about.addEventListener('mouseout', hideBorder2);
contact.addEventListener('mouseover', contactUnderline);
contact.addEventListener('mouseout', hideBorder3);
blog.addEventListener('mouseover', blogUnderline);
blog.addEventListener('mouseout', hideBorder4);
careers.addEventListener('mouseover', careersUnderline);
careers.addEventListener('mouseout', hideBorder5);

const changeTextColor = () => {
	article1.style.color = '#00cc99';
}

const changeItBack = () => {
	article1.style.color = '#000000';
}

const changeTextColor1 = () => {
	article2.style.color = '#00cc99';
}

const changeItBack1 = () => {
	article2.style.color = '#000000';
}

const changeTextColor2 = () => {
	article3.style.color = '#00cc99';
}

const changeItBack2 = () => {
	article3.style.color = '#000000';
}

const changeTextColor3 = () => {
	article4.style.color = '#00cc99';
}

const changeItBack3 = () => {
	article4.style.color = '#000000';
}

article1.addEventListener('mouseover', changeTextColor);
article1.addEventListener('mouseout', changeItBack);
article2.addEventListener('mouseover', changeTextColor1);
article2.addEventListener('mouseout', changeItBack1);
article3.addEventListener('mouseover', changeTextColor2);
article3.addEventListener('mouseout', changeItBack2);
article4.addEventListener('mouseover', changeTextColor3);
article4.addEventListener('mouseout', changeItBack3);
