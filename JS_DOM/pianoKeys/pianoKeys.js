// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
    notes.push(document.getElementById(key));
})

//Changes the background colour of a piano key to a different colour.
const keyPlay = function(event) {
    //Changes the background colour of an element.
    event.target.style.backgroundColor = 'pink';
}

//Returns the background colour of the piano key to its default state.
const keyReturn = function(event) {
    //Returns the background colour of an element to its default state.
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

//Runs 'eventAssignment' on every item (note) in the array 'notes',
//which assigns the onmousedown and onmouseup functionality to each note.
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

nextOne.onclick = function() {
    nextTwo.hidden = false;

    nextOne.hidden = true;

    document.getElementById('letter-note-five').innerHTML = 'D';

    document.getElementById('letter-note-six').innerHTML = 'C';
}

// Write anonymous event handler property and function for the second progress button

nextTwo.onclick = function() {
    nextThree.hidden = false;

    nextTwo.hidden = true;

    document.getElementById('word-five').innerHTML = 'DEAR';

    document.getElementById('word-six').innerHTML = 'FRI-';

    document.getElementById('letter-note-three').innerHTML = 'G';

    document.getElementById('letter-note-four').innerHTML = 'E';

    document.getElementById('letter-note-five').innerHTML = 'C';

    document.getElementById('letter-note-six').innerHTML = 'B';

    lastLyric.style.display = 'inline-block';
}

// Write anonymous event handler property and function for the third progress button

nextThree.onclick = function () {
    startOver.hidden = false;

    nextThree.hidden = true;

    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('word-three').innerHTML = 'BIRTH';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('word-six').innerHTML = 'YOU';

    document.getElementById('letter-note-one').innerHTML = 'F';
    document.getElementById('letter-note-two').innerHTML = 'F';
    document.getElementById('letter-note-three').innerHTML = 'E';
    document.getElementById('letter-note-four').innerHTML = 'C';
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';

    lastLyric.style.display = 'none';
}

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