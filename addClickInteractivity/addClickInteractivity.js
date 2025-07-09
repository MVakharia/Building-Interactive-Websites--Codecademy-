//Finds the first 'button' HTML element in the document and assigns it to the variable 'element'.
let element = document.querySelector('button');


function turnButtonRed() {
    //Sets the background colour of the element (the button) to red.
    element.style.backgroundColor = 'red';

    //Sets the text colour of the element (the button) to white.
    element.style.color = 'white';

    //Sets the text of the element (the button) to 'Red Button'.
    element.innerHTML = 'Red Button';
}

//Assigns the function 'turnButtonRed' to the 'onclick' event.
element.onclick = turnButtonRed;
