'use strict';

// FUNTIONS

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

function createHtmlElement(element, className, quantity = 10, container){
    const fragment = document.createDocumentFragment();
    const gameContainer = document.querySelector(container);
    for(let i = 0; i < Math.pow(quantity, 2); i++){
        let newElement = document.createElement(element);
        newElement.classList.add(className);
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


function checkNearBombs(input, controlList){
    const yRatio = levelConverterInNumber(level.value);
    const xRatio = 1;
    let nearBombs = 0;
    if(controlList.includes(input - yRatio - xRatio)){
        nearBombs++;
    }
    if(controlList.includes(input - yRatio)){
        nearBombs++;
    }
    if(controlList.includes(input - yRatio + xRatio)){
        nearBombs++;
    }
    if(controlList.includes(input - xRatio)){
        nearBombs++;
    }
    if(controlList.includes(input + xRatio)){
        nearBombs++;
    }
    if(controlList.includes(input + yRatio - xRatio)){
        nearBombs++;
    }
    if(controlList.includes(input + yRatio)){
        nearBombs++;
    }
    if(controlList.includes(input + yRatio + xRatio)){
        nearBombs++;
    }
    return nearBombs;
}

function isCoincident(input, controlList){
    if(controlList.includes(input)){
        return true;
    }
    return false;
}

function generateRandomNum(min, max){
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    return randomNum;
}

function createBombsArray(arrayLenght){
    const bombsArray = [];
    for(let i = 0; i < Math.floor(arrayLenght / 5); i++){
        const newBomb = generateRandomNum(0, arrayLenght - 1);
        if(bombsArray.includes(newBomb)){
            i--;
        }else{
            bombsArray.push(newBomb);
        }
    }
    return bombsArray;
}



// PROGRAM

const element = 'div';
const className = 'box';
const container = '.board';
const level = document.getElementById('level');
const playBtn = document.getElementById('play-btn');

createHtmlElement(element, className, levelConverterInNumber(level.value),container);

playBtn.addEventListener('click', ()=>{
    const board = document.querySelector('.board');
    board.innerHTML = '';
    createHtmlElement(element, className, levelConverterInNumber(level.value),container);
});

const boxes = document.querySelectorAll('.box');




for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', ()=>{
        
    });
}






