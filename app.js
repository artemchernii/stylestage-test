// One liners

//1. Design Mode

document.designMode = 'off';
//document.designMode = 'on';

//2. 50/50

const trueOrFalse = () => Math.random() >= 0.5;

console.log('true or false', trueOrFalse());
console.log('true or false 2', trueOrFalse());
console.log('true or false 3', trueOrFalse());

//3. Merge arrays

const array1 = [1, 2, 3, 4];
const array2 = ['one', 'two', 'three', 4];

const merged = [...array1, ...array2];
const mergedSet = [...new Set([...array1, ...array2])];

console.log('merged', merged);
console.log('mergedSet', mergedSet);

//4. Ease hex generator

const randomHexColor = () => Math.floor(Math.random() * 0xffffff).toString(16);

console.log('random hex color =>', '#' + randomHexColor());
console.log('random hex color =>', '#' + randomHexColor());
console.log('random hex color =>', '#' + randomHexColor());

//5. Clipboard copy text

const clipboardCopy = (text) => navigator.clipboard.writeText(text);

//clipboardCopy('Teresa');

const randomButton = document.createElement('button');
randomButton.innerText = 'Button';
randomButton.setAttribute('id', 'randomButton');
document.body.appendChild(randomButton);
document.querySelector('#randomButton').addEventListener('click', function () {
	console.log('clicked');
	clipboardCopy('Teresa');
	this.style.transition = 'all 1s ease';
	this.style.opacity = '0';
});

//6. Transition end event
document
	.querySelector('#randomButton')
	.addEventListener('transitionend', () => (randomB.style.display = 'none'));

//7. Console table

const someData = [
	{ name: 'Artem', id: 1 },
	{ name: 'Oleg', id: 2 },
	{ name: 'Rustam', id: 3 },
	{ name: 'Oksana', id: 4 },
	{ name: 'Nastya', id: 5 },
	{ name: 'Teresa', id: 6 },
	{ name: 'Kolya', id: 7 },
	{ name: 'Sveta', id: 8 },
];

console.table(someData);

// Salesforce JS certification

console.log('======================Certification======================');

// Closures

function createScoreFunction() {
	scores = [];

	return function (score) {
		scores.push(score);
		console.log(`Total scores: ${scores.length}`);
		return scores;
	};
}

const addScore = createScoreFunction();

function keepSecret(first) {
	let secrets = [first];
	return function (secret) {
		secrets.push(secret);
		return secrets;
	};
}

const addSecret = keepSecret('my very first secret');

// Apply, call, bind

const methods = {
	sayHello: function (love) {
		console.log('Hello. My name is ' + this.name + ' and I love ' + love);
	},
	sayBye: function (love) {
		console.log('Bye. My name is ' + this.name + ' and I love ' + love);
	},
};

const artem = {
	name: 'Artem',
};
const oleg = {
	name: 'Oleg',
};

methods.sayHello.call(artem, 'JS');
methods.sayHello.apply(artem, ['JS']);
const sayHelloArtem = methods.sayHello.bind(artem);
sayHelloArtem('JS');
methods.sayHello.call(oleg, 'Police');

// Iterator

function progressiveFactorial(upperLimit) {
	let factorial = 1,
		num = 1;

	const factorialIterator = {
		next() {
			if (num <= upperLimit) {
				num++;
				factorial *= num;
				return { value: { number: num, factorial }, done: false };
			}

			return { value: { number: num, factorial }, done: true };
		},
	};

	return factorialIterator;
}

let factorial10 = progressiveFactorial(10);

// Recursion

function fib(sequence, len) {
	let size = sequence.length;
	if (size >= len) {
		return sequence;
		// If condition has been met, return the sequence.
	}
	sequence.push(sequence[size - 2] + sequence[size - 1]);
	return fib(sequence, len);
	// Call itself with the ‘return’ keyword.
}
const fibSeq = fib([0, 1], 10);
console.log(fibSeq);

// Generators

function* rhymeGenerator() {
	yield 'One';
	yield 'Two';
	yield 'Three';
}

const rhyme = rhymeGenerator();

function* fibonacciSeq() {
	let start1 = 0,
		start2 = 1,
		cnt = 2;
	const sequence = [start1, start2];
	while (cnt <= 100) {
		let newNum = start1 + start2;
		start1 = start2;
		start2 = newNum;
		cnt++;
		sequence.push(newNum);
		yield sequence;
	}
}
const fib100 = fibonacciSeq();
console.log(fib100.next());

function progressiveFactorial(upperLimit) {
	let factorial = 1,
		num = 1;
	const factorialIterator = {
		// This is the iterator object.
		next() {
			// next method is required for iterator object.
			if (num <= upperLimit) {
				num++;
				factorial = factorial * num;
				return { value: { number: num, factorial }, done: false };
				// return value when more numbers in the sequence are available.
			}
			return { value: { number: num, factorial }, done: true };
			// return value when all numbers have been displayed.
		},
	};
	return factorialIterator;
	// return the iterator object.
}
let factorial20 = progressiveFactorial(20); // Iterator created with upper limit of 10.
factorial10.next(); // Iterates once, so the number is 2.
console.log(factorial10.next()); // Shows the factorial of 3.

// Objects

const user1 = {
	firstName: 'Artem',
	lastName: 'Chernii',
	age: 28,
	admin: true,
	greeting(greet) {
		console.log(`${greet}, ${this.firstName}!`);
	},
	get lovely() {
		return 'TS';
	},
	wfn: '',
	set wf(gname) {
		this.wfn = gname;
	},
};

const user2 = new Object();
user2.firstName = 'Oleg';
user2.lastName = 'Chernish';
user2.age = 27;
user2.admin = true;

user1.greeting('Hey!');
console.log(user1.lovely);
user1.wf = 'Tanya';
console.log(user1.wfn);

// Classes

function ClassName(name) {
	this.name = name;
}

const lovelyClass = new ClassName('lovelyClass');
console.log(lovelyClass.name);

class ClassName2 extends ClassName {
	constructor(name, age) {
		super(name);
		this.age = age;
	}
	consoleStuff() {
		console.log(this.name, this.age);
	}
}
const lovelyClass2 = new ClassName2('artem', 28);
console.log(lovelyClass2);
const lovelyParams = {
	name: 'Rustam',
	age: 27,
};
class papaClass extends ClassName2 {
	constructor(name, age, cap) {
		super(name, age);
		this.cap = cap;
		this.canReserve = false;
	}
	set reservable(val) {
		this.canReserve = val;
	}
	get reservable() {
		return this.canReserve;
	}
}

const papaClass1 = new papaClass('papaClass1', 28, 20);
papaClass1.reservable = true;
console.log(papaClass1);

lovelyClass2.consoleStuff.apply(lovelyParams);
