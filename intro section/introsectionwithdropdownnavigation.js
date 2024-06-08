const features = document.getElementById('features');
const company = document.getElementById('company');
const arrowDown1 = document.getElementById('arrowdown1');
const arrowDown2 = document.getElementById('arrowdown2');
const featuresOutput = document.getElementById('featuresoutput');
const companyOutput = document.getElementById('companyoutput');


const displayFeatures = () => {
	featuresOutput.style.display = 'block';
}

const hideFeatures = () => {
	featuresOutput.style.display = 'none';
}

const displayCompany = () => {
	companyOutput.style.display = 'block';
}

const hideCompany = () => {
	companyOutput.style.display = 'none';
}

features.addEventListener('mouseover', displayFeatures);
features.addEventListener('mouseout', hideFeatures);
company.addEventListener('mouseover', displayCompany);
company.addEventListener('mouseout', hideCompany);
