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
        // newElement.innerHTML = i;
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

function createLeftBorder(arrayLenght){
    const yRatio = Math.sqrt(arrayLenght);
    let leftBorderArray = [];
    for(let i = 0; i < arrayLenght; i+= yRatio){
        leftBorderArray.push(i);
    }
    return leftBorderArray;
}

function createRightBorder(arrayLenght){
    const yRatio = Math.sqrt(arrayLenght);
    let rightBorderArray = [];
    for(let i = yRatio - 1; i < arrayLenght; i += yRatio){
        rightBorderArray.push(i);
    }
    return rightBorderArray;
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

function createBombsArray(arrayLenght, input){
    const bombsArray = [];
    for(let i = 0; i < Math.floor(arrayLenght / 5); i++){
        const newBomb = generateRandomNum(0, arrayLenght - 1);
        if(bombsArray.includes(newBomb) || newBomb === input){
            i--;
        }else{
            bombsArray.push(newBomb);
        }
    }
    return bombsArray;
}

function draw(input, elementArray, nearBombs, isCoincident){
    const element = elementArray[input];
    if(!isCoincident){
        switch(nearBombs){
            case 0:
                element.classList.add('empty');
                break;
            case 1:
                element.innerHTML = nearBombs;
                element.classList.add('one');
                break;
            case 2:
                element.innerHTML = nearBombs;
                element.classList.add('two');
                break;
            case 3:
                element.innerHTML = nearBombs;
                element.classList.add('three');
                break;
            case 4:
                element.innerHTML = nearBombs;
                element.classList.add('four');
                break;
            case 5:
                element.innerHTML = nearBombs;
                element.classList.add('five');
                break;
            case 6:
                element.innerHTML = nearBombs;
                element.classList.add('six');
                break;
            case 7:
                element.innerHTML = nearBombs;
                element.classList.add('seven');
                break;
            case 8:
                element.innerHTML = nearBombs;
                element.classList.add('eight');
                break;
        }
    }else {
        element.innerHTML = 'BOMB';
    }

}



// PROGRAM

const element = 'div';
const className = 'box';
const container = '.board';
const level = document.getElementById('level');
const playBtn = document.getElementById('play-btn');
let hasClicked = false;
let bombsArray = [];

createHtmlElement(element, className, levelConverterInNumber(level.value),container);

playBtn.addEventListener('click', ()=>{
    const board = document.querySelector('.board');
    board.innerHTML = '';
    createHtmlElement(element, className, levelConverterInNumber(level.value),container);
});

const boxes = document.querySelectorAll('.box');

for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', ()=>{
        let nearBombs = 0;
        let impactedBomb = false;
        if(!hasClicked){
            hasClicked = true;
            bombsArray = [...createBombsArray(boxes.length, i)];
            nearBombs = checkNearBombs(i, bombsArray);
        }else{
            impactedBomb = isCoincident(i, bombsArray);
            nearBombs = checkNearBombs(i, bombsArray);
        }
        draw(i, boxes, nearBombs, impactedBomb);
    });
}






