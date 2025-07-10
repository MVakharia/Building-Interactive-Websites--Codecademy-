let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');


let sharePhoto = function(event) {
    //Accesses the 'style' property of the event target (which is of type Event Target).
    //Sets its display property to 'none'.
    event.target.style.display = 'none';

    //Accesses the number of milliseconds between the DOM loading and the event firing.
    text.innerHTML = event.timeStamp;
}

share.addEventListener('click', sharePhoto);