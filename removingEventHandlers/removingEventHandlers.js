//An array of fortunes that can be displayed by the fortune-teller.
let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
    "A fresh start will put you on your way.",
    "A golden egg of opportunity falls into your lap this month.",
    "A smile is your personal welcome mat.",
    "All your hard work will soon pay off."
]

//A reference to the Fortune button.
let button = document.getElementById('fortuneButton');

//A reference to the displayed fortune.
let fortune = document.getElementById('fortune');

//Randomly selects and returns a fortune from the array of fortunes above.
function fortuneSelector(){
    let randomFortune = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomFortune];
}

function showFortune(){

    //The displayed fortune becomes the fortune randomly selected and returned
    // from the Fortune Selector above.
    fortune.innerHTML = fortuneSelector();

    //The fortune button tells the user to come back tomorrow.
    button.innerHTML = "Come back tomorrow!";

    //Sets the cursor style to its default.
    button.style.cursor = "default";

    //Removes the event listener from the button,
    // so that if it is clicked again, there is nothing listening to the click. 
    button.removeEventListener('click', showFortune);

}

button.addEventListener('click', showFortune);