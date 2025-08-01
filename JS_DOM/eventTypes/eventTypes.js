// Stores the "Pick a Colour" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Colour" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create colour codes for the randomColor variable
function colorValue() {
    return Math.floor(Math.random() * 256);
}

function colorChange(event){
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';

    button.style.backgroundColor = randomColor;

}

button.addEventListener('click', colorChange);

mysteryButton.addEventListener('wheel', colorChange);

