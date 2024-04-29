const text = document.getElementById('txt');
const del = document.getElementById('del');
const division = document.getElementById('division');
const multiplication = document.getElementById('multiplication');
const subtraction = document.getElementById('subtraction');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const addition = document.getElementById('addition');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const zero = document.getElementById('zero');
const comma = document.getElementById('comma');
const equal = document.getElementById('equal');

const Seven = () => {
    text.value += 7;
};

seven.onclick = Seven;

const Eight = () => {
    text.value += 8;
};

eight.onclick = Eight;

const Nine = () => {
    text.value += 9;
};

nine.onclick = Nine;

const Six = () => {
	text.value += 6;
};

six.onclick = Six;

const Five = () => {
    text.value += 5;
};

five.onclick = Five;

const Four = () => {
	text.value += 4;
};

four.onclick = Four;

const Three = () => {
	text.value += 3;
};

three.onclick = Three;

const Two = () => {
	text.value += 2;
};

two.onclick = Two;

const One = () => {
	text.value += 1;
};

one.onclick = One;

const Zero = () => {
	text.value += 0;
};

zero.onclick = Zero;

const deleteAll = () => {
	text.value = '';
};

del.addEventListener('click', deleteAll);

const Addition = () => {
    text.value += '+';
};

addition.onclick = Addition;

const Substraction = () => {
	text.value += '-';
};

substraction.onclick = Substraction;

const Multiplication = () => {
	text.value += '*';
};

multiplication.onclick = Multiplication;

const Division = () => {
	text.value += '/';
};

division.onclick = Division;

const EqualTo = () => {
	try {
        text.value = eval(text.value);
    } catch (error) {
        text.value = 'Error';
    }
};


equal.onclick = EqualTo;

const Decimal = () => {
	text.value += '.'
}

comma.onclick = Decimal;
