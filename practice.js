import logger from './utils/logger.js';
import {
    blockBlackStyles,
    buttonStyles,
} from './utils/buttonsStylingPractice.js';
const coolBtn = document.getElementById('cool-btn');

coolBtn.setAttribute('style', buttonStyles);
coolBtn.addEventListener('click', coolFn);

function createBlock() {
    const blockBlack = document.createElement('div');
    blockBlack.classList.add('block-black');
    blockBlack.setAttribute('id', 'block-black');
    blockBlack.style.cssText = blockBlackStyles;
    const arrayOfWords = ['Teresa', 'Gym', 'Money'];
    arrayOfWords.forEach((el) => {
        blockBlack.innerHTML += `<h3>I like ${el}</h3>`;
    });
    document.querySelector('main').appendChild(blockBlack);
}

function coolFn(e) {
    const { name } = e.target.dataset;
    const { age } = e.target.dataset;
    console.log('name', name);
    console.log('age', age);
    logger('heelllloooo');
    createBlock();
}

const clearBtn = document.createElement('button');
clearBtn.innerText = 'clear';
clearBtn.dataset.id = '1928391';
console.log(clearBtn.dataset);
document.getElementsByTagName('main')[0].appendChild(clearBtn);
clearBtn.addEventListener('click', removeBlockAsIwantIt);
function removeBlockAsIwantIt() {
    import('./utils/buttonsStylingPractice.js').then((module) => {
        module.removeBlock();
    });
}

// Decorator practice

import {
    getUserFn,
    parseFn,
    User,
    logClassMethod,
} from './utils/decoratorPractice.js';

getUserFn();
parseFn('/{}');

console.log('JS is not broken :) ');

const objClassDec = new User('Teresa', 20);
// Decorate class method
const getUserM = logClassMethod(objClassDec, objClassDec.getUser);

console.log(getUserM());
// import { Human } from './utils/decoratorPractice.js';
// const humanT = new Human('Teresa');

// Closure

import dividedBy from './utils/scopePractice.js';

const divideBy10 = dividedBy(10);

console.log(divideBy10(30));

const multiplierX3 = (nicearg) => {
    return function (innerarg) {
        return nicearg * innerarg;
    };
};

function factorial(x) {
    if (x < 0) throw Error('Cannot calculate factorial of a negative number');
    function iter(i, fact) {
        return i === 0 ? fact : iter(i - 1, i * fact);
    }
    return iter(x, 1);
}

factorial(6); // 720

function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber;
}

var number = numberGenerator();
number(); // 2
