// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
    itemOne.style.width = ''
    itemTwo.style.backgroundColor = ''
    itemThree.innerHTML = 'The mouse must leave the box to change the text'
    itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here

function increaseWidth () {
    itemOne.style.width = '401px';
}

itemOne.addEventListener('mouseover', increaseWidth);

function changeBackground() {
    itemTwo.style.backgroundColor = '';
}

itemTwo.addEventListener('mouseup', changeBackground);

function changeText() {
    itemThree.innerHTML = 'The mouse has left the element.';
}

itemThree.addEventListener('mouseout', changeText);

function showItem() {
    itemFive.style.display = 'block';
}

itemFour.addEventListener('mousedown', showItem);

