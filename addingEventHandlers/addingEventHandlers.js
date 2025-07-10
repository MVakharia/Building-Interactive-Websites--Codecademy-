//The 'view' button at the top of the screen.
let view = document.getElementById('view-button');

//The 'close' button at the bottom of the layout.
let close = document.getElementById('close-button');

//Codey the Codecademy mascot, who appears when the 'View' button is clicked.
let codey = document.getElementById('codey');

//  A function that sets the 'close' button and the mascot to have a display type.
// This shows them in the browser when the function is executed.
let open = function() {
    codey.style.display = 'block';
    close.style.display = 'block';
};

//A function that sets the 'close' button and the mascot to have no display type.
//This hides them in the browser when the function is executed.
let hide = function() {
    codey.style.display = 'none';
    close.style.display = 'none';
};

//Adds a 'click' event listener to the 'view' button.
//This causes it to trigger the 'open' function when it is clicked.
view.addEventListener('click', open);

//Adds a 'click' event listener to the 'close' button.
//This causes it to trigger the 'hide' function when it is clicked.
close.addEventListener('click', hide);

// Write your code here

//The objective is to create a function named 'textChange()'.

// This function changes the text in the 'view' element to 'Hello World'.
function textChange() {
    view.innerText = 'Hello World!';
}

function textReturn () {
    view.innerText = 'View';
}

textChange();

textReturn();

view.addEventListener('click', textChange);

close.addEventListener('click', textReturn);