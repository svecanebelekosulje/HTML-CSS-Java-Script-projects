//DOM
const startBtn = document.getElementById('startBtn');
const variableOption1 = document.getElementById('variable1');
const variableOption2 = document.getElementById('variable2');
const variableOption3 = document.getElementById('variable3');
const variableOption4 = document.getElementById('variable4');
const question0 = document.getElementById('question0');
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const arrayOption1 = document.getElementById('array1');
const arrayOption2 = document.getElementById('array2');
const arrayOption3 = document.getElementById('array3');
const arrayOption4 = document.getElementById('array4');
const nextBtn = document.getElementById('next1');
const nextBtn2 = document.getElementById('next2');
const question3 = document.getElementById('question3');
const operatorOption1 = document.getElementById('operator1');
const operatorOption2 = document.getElementById('operator2');
const operatorOption3 = document.getElementById('operator3');
const operatorOption4 = document.getElementById('operator4');
const nextBtn3 = document.getElementById('next3');
const question4 = document.getElementById('question4');
const methodOption1 = document.getElementById('method1');
const methodOption2 = document.getElementById('method2');
const methodOption3 = document.getElementById('method3');
const methodOption4 = document.getElementById('method4');
const nextBtn4 = document.getElementById('next4');
const question5 = document.getElementById('question5');
const functionOption1 = document.getElementById('function1');
const functionOption2 = document.getElementById('function2');
const functionOption3 = document.getElementById('function3');
const functionOption4 = document.getElementById('function4');
const nextBtn5 = document.getElementById('next5');
const question6 = document.getElementById('question6');
const varOption = document.getElementById('var');
const letOption = document.getElementById('let');
const constOption = document.getElementById('const');
const all = document.getElementById('all');
const nextBtn6 = document.getElementById('next6');
const finished = document.getElementById('finished');
const quizScore = document.getElementById('score');
const restartBtn = document.getElementById('restart');

let score = 0;

//QUESTION 1
const clickOnStartBtn = () => {
	question0.style.display = 'none';
	question1.style.display = 'block'
}

startBtn.addEventListener('click', clickOnStartBtn);

const correctAnswerOnVariable = (event) => {
	if (event.target.id === 'variable2') {
        score++;
	}
	variable1.style.backgroundColor = 'red';
	variable1.style.color = 'white';
	variable2.style.backgroundColor = 'green';
	variable2.style.color = 'white';
	variable3.style.backgroundColor = 'red';
	variable3.style.color = 'white';
	variable4.style.backgroundColor = 'red';
	variable4.style.color = 'white';
}

const displayNext = () => {
	nextBtn.style.display = 'block';
}

variable1.addEventListener('click', correctAnswerOnVariable );
variable1.addEventListener('click', displayNext)

variable2.addEventListener('click', correctAnswerOnVariable);
variable2.addEventListener('click', displayNext);

variable3.addEventListener('click', correctAnswerOnVariable);
variable3.addEventListener('click', displayNext);

variable4.addEventListener('click', correctAnswerOnVariable);
variable4.addEventListener('click', displayNext);

//QUESTION 2
const q1ToQ2 = () => {
	question1.style.display = 'none';
	question2.style.display = 'block';
}

nextBtn.addEventListener('click', q1ToQ2);

const correctAnswerInArray = (event) => {
	if (event.target.id === 'array2') {
		score++
	}
	arrayOption1.style.backgroundColor = 'red';
	arrayOption1.style.color = 'white';
	arrayOption2.style.backgroundColor = 'green';
	arrayOption2.style.color = 'white';
	arrayOption3.style.backgroundColor = 'red';
	arrayOption3.style.color = 'white';
	arrayOption4.style.backgroundColor = 'red';
	arrayOption4.style.color = 'white';
}

const displayNext2 = () => {
	nextBtn2.style.display = 'block';
}

arrayOption1.addEventListener('click', correctAnswerInArray);
arrayOption1.addEventListener('click', displayNext2);

arrayOption2.addEventListener('click', correctAnswerInArray);
arrayOption2.addEventListener('click', displayNext2);

arrayOption3.addEventListener('click', correctAnswerInArray);
arrayOption3.addEventListener('click', displayNext2);

arrayOption4.addEventListener('click', correctAnswerInArray);
arrayOption4.addEventListener('click', displayNext2);

//QUESTION 3
const q2ToQ3 = () => {
	question2.style.display = 'none';
	question3.style.display = 'block';
}

nextBtn2.addEventListener('click', q2ToQ3);

const correctAnswerInOperator = (event) => {
	if (event.target.id === 'operator3') {
		score++
	}
	operatorOption1.style.backgroundColor = 'red';
	operatorOption1.style.color = 'white';
	operatorOption2.style.backgroundColor = 'red';
	operatorOption2.style.color = 'white';
	operatorOption3.style.backgroundColor = 'green';
	operatorOption3.style.color = 'white';
	operatorOption4.style.backgroundColor = 'red';
	operatorOption4.style.color = 'white';
}

const displayNext3 = () => {
	nextBtn3.style.display = 'block';
}

operatorOption1.addEventListener('click', correctAnswerInOperator);
operatorOption1.addEventListener('click', displayNext3);

operatorOption2.addEventListener('click', correctAnswerInOperator);
operatorOption2.addEventListener('click', displayNext3);

operatorOption3.addEventListener('click', correctAnswerInOperator);
operatorOption3.addEventListener('click', displayNext3);

operatorOption4.addEventListener('click', correctAnswerInOperator);
operatorOption4.addEventListener('click', displayNext3);

//QUESTION 4
const q3ToQ4 = () => {
	question3.style.display = 'none';
	question4.style.display = 'block';
}

nextBtn3.addEventListener('click', q3ToQ4);

const correctAnswerInMethod = (event) => {
	if (event.target.id === 'method2') {
		score++
	}
	methodOption1.style.backgroundColor = 'red';
	methodOption1.style.color = 'white';
	methodOption2.style.backgroundColor = 'green';
	methodOption2.style.color = 'white';
	methodOption3.style.backgroundColor = 'red';
	methodOption3.style.color = 'white';
	methodOption4.style.backgroundColor = 'red';
	methodOption4.style.color = 'white';
}

const displayNext4 = () => {
	nextBtn4.style.display = 'block';
}

methodOption1.addEventListener('click', correctAnswerInMethod);
methodOption1.addEventListener('click', displayNext4);

methodOption2.addEventListener('click', correctAnswerInMethod);
methodOption2.addEventListener('click', displayNext4);

methodOption3.addEventListener('click', correctAnswerInMethod);
methodOption3.addEventListener('click', displayNext4);

methodOption4.addEventListener('click', correctAnswerInMethod);
methodOption4.addEventListener('click', displayNext4);

//QUESTION 5
const q4ToQ5 = () => {
	question4.style.display = 'none';
	question5.style.display = 'block';
}

nextBtn4.addEventListener('click', q4ToQ5);

const correctAnswerInFunction = (event) => {
	if (event.target.id === 'function1') {
		score++
	}
	functionOption1.style.backgroundColor = 'green';
	functionOption1.style.color = 'white';
	functionOption2.style.backgroundColor = 'red';
	functionOption2.style.color = 'white';
	functionOption3.style.backgroundColor = 'red';
	functionOption3.style.color = 'white';
	functionOption4.style.backgroundColor = 'red';
	functionOption4.style.color = 'white';
}
	
const displayNext5 = () => {
	nextBtn5.style.display = 'block'
}

functionOption1.addEventListener('click', correctAnswerInFunction);
functionOption1.addEventListener('click', displayNext5);

functionOption2.addEventListener('click', correctAnswerInFunction);
functionOption2.addEventListener('click', displayNext5);

functionOption3.addEventListener('click', correctAnswerInFunction);
functionOption3.addEventListener('click', displayNext5);

functionOption4.addEventListener('click', correctAnswerInFunction);
functionOption4.addEventListener('click', displayNext5);

//QUESTION 6
const q5ToQ6 = () => {
	question5.style.display = 'none';
	question6.style.display = 'block';
}

nextBtn5.addEventListener('click', q5ToQ6);

const Variables = (event) => {
	if (event.target.id === 'all') {
		score++
	}
	varOption.style.backgroundColor = 'red';
	varOption.style.color = 'white';
	letOption.style.backgroundColor = 'red';
	letOption.style.color = 'white';
	constOption.style.backgroundColor = 'red';
	constOption.style.color = 'white';
	all.style.backgroundColor = 'green';
	all.style.color = 'white';
}

const displayNext6 = () => {
	nextBtn6.style.display = 'block'
}

varOption.addEventListener('click', Variables);
varOption.addEventListener('click', displayNext6);

letOption.addEventListener('click', Variables);
letOption.addEventListener('click', displayNext6);

constOption.addEventListener('click', Variables);
constOption.addEventListener('click', displayNext6);

all.addEventListener('click', Variables);
all.addEventListener('click', displayNext6);

//FINISHED
const q6ToFinished = () => {
	question6.style.display = 'none';
	finished.style.display = 'block';
	quizScore.innerHTML = score
}

nextBtn6.addEventListener('click', q6ToFinished);

//RESTART
const clickOnRestartBtn = () => {
	finished.style.display = 'none';
	question1.style.display = 'block';
    question2.style.display = 'none';
    question3.style.display = 'none';
    question4.style.display = 'none';
    question5.style.display = 'none';
    question6.style.display = 'none';
    nextBtn.style.display = 'none';
    nextBtn2.style.display = 'none';
    nextBtn3.style.display = 'none';
    nextBtn4.style.display = 'none';
    nextBtn5.style.display = 'none';
    nextBtn6.style.display = 'none';
	
	variable1.style.backgroundColor = '';
	variable1.style.color = '';
	variable2.style.backgroundColor = '';
	variable2.style.color = '';
	variable3.style.backgroundColor = '';
	variable3.style.color = '';
	variable4.style.backgroundColor = '';
	variable4.style.color = '';
	
	arrayOption1.style.backgroundColor = '';
	arrayOption1.style.color = '';
	arrayOption2.style.backgroundColor = '';
	arrayOption2.style.color = '';
	arrayOption3.style.backgroundColor = '';
	arrayOption3.style.color = '';
	arrayOption4.style.backgroundColor = '';
	arrayOption4.style.color = '';
	
	operatorOption1.style.backgroundColor = '';
	operatorOption1.style.color = '';
	operatorOption2.style.backgroundColor = '';
	operatorOption2.style.color = '';
	operatorOption3.style.backgroundColor = '';
	operatorOption3.style.color = '';
	operatorOption4.style.backgroundColor = '';
	operatorOption4.style.color = '';
	
	methodOption1.style.backgroundColor = '';
	methodOption1.style.color = '';
	methodOption2.style.backgroundColor = '';
	methodOption2.style.color = '';
	methodOption3.style.backgroundColor = '';
	methodOption3.style.color = '';
	methodOption4.style.backgroundColor = '';
	methodOption4.style.color = '';
	
	functionOption1.style.backgroundColor = '';
	functionOption1.style.color = '';
	functionOption2.style.backgroundColor = '';
	functionOption2.style.color = '';
	functionOption3.style.backgroundColor = '';
	functionOption3.style.color = '';
	functionOption4.style.backgroundColor = '';
	functionOption4.style.color = '';
	
	varOption.style.backgroundColor = '';
	varOption.style.color = '';
	letOption.style.backgroundColor = '';
	letOption.style.color = '';
	constOption.style.backgroundColor = '';
	constOption.style.color = '';
	all.style.backgroundColor = '';
	all.style.color = '';
	
}

restartBtn.addEventListener('click', clickOnRestartBtn);


