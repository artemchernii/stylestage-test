console.log('WINDOW: ', window);
console.log('localStorage', localStorage);

const addItemToStorage = (item) => {
    window.localStorage.setItem('name', JSON.stringify(item));
    rewriteHtml();
};

function rewriteHtml() {
    heading.setAttribute('data-name', localItem.name);
    heading.setAttribute('data-nationality', localItem.nationality);
}

const localItem = JSON.parse(localStorage.getItem('name'));

const heading = document.createElement('h1');

heading.classList.add(localItem.name);
heading.innerHTML = `${localItem.name} is ${localItem.nationality}`;
heading.style.cssText = 'letter-spacing: 2px; font-size: 42px';
heading.setAttribute('data-name', localItem.name);
heading.setAttribute('data-nationality', localItem.nationality);

const appending = (child, parent = 'body') => {
    document.body.querySelector(parent).appendChild(child);
    console.log(`We append ${child} to ${parent}`);
};

appending(heading, 'main');

const changeName = document.querySelector('#change-name');
changeName.style.marginTop = '20px';
const onChangeName = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);

    localItem.name === 'Teresa'
        ? addItemToStorage({ name: 'Artem', nationality: 'Ukrainian' })
        : addItemToStorage({ name: 'Teresa', nationality: 'German' });
};

changeName.addEventListener('click', onChangeName);

('use strict');

//Closure practice

function changeBalance() {
    let balance = 0;
    return function (sum) {
        balance += sum;
        console.log('balance: ', balance);
    };
}

const change = changeBalance();
change(20);
change(40);

//Closure practice

  







