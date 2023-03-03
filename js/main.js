'use strict';

// FUNTIONS

function createHtmlElement(element, className, quantity = 10, container){
    const fragment = document.createDocumentFragment();
    const gameContainer = document.querySelector(container);
    for(let i = 0; i < Math.pow(quantity, 2); i++){
        let newElement = document.createElement(element);
        newElement.classList.add(className);
        newElement.addEventListener('click',()=>{
            hello();
        });
        newElement.innerHTML = i;
        switch (quantity){
            case 10:
                newElement.classList.add('easy');
                break;
            case 9:
                newElement.classList.add('medium');
                break;
            case 7:
                newElement.classList.add('hard');
                break;
        }
        fragment.append(newElement);
    }
    gameContainer.append(fragment);
}

function resetHTML(elementToClear){
    const element = document.querySelector(elementToClear);
    element.innerHTML = '';
}

function hello(){
    console.log('hello');
}

function levelConverterInNumber(input){
    let number;
    switch(input){
        case 'easy':
            number = 10;
            break;
        case 'medium':
            number = 9;
            break;
        case 'hard':
            number = 7;
            break;
    }
    return number;
}

// PROGRAM

const element = 'div';
const className = 'box';
const container = '.board';
const level = document.getElementById('level');
const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', ()=>{
    resetHTML(container);
    createHtmlElement(element, className, levelConverterInNumber(level.value),container);
});









