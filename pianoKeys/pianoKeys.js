// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
    notes.push(document.getElementById(key));
})

//Changes the background colour of an element.
const keyPlay = function(event) {
    event.target.style.backgroundColor = 'pink';
}

//Returns the background colour of an element to its default state.
const keyReturn = function(event) {
    event.target.style.backgroundColor = '';
}

//'eventAssignment' is a function with a parameter of 'note'.

//The argument that we pass into 'eventAssignment' has two methods,
// 'onmousedown' and 'onmouseup'.
let eventAssignment = function(note) {

    //The 'onmousedown' method triggers the function 'keyPlay' which takes an argument of 'event'.
    note.onmousedown = function() {
        keyPlay(event);
    }

    //The 'onmouseup' method triggers the function 'keyReturn' which takes an argument of 'event'.
    note.onmouseup = function() {
        keyReturn(event);
    }
}

//Runs the array elements through the function

notes.forEach(eventAssignment);



// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button


// Write anonymous event handler property and function for the second progress button


// Write anonymous event handler property and function for the third progress button


// This is the event handler property and function for the startOver button
startOver.onclick = function() {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('letter-note-one').innerHTML = 'G';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('letter-note-two').innerHTML = 'G';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('letter-note-four').innerHTML = 'G';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-six').innerHTML = 'B';
}