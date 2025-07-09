let first = document.querySelector('body').children[0];

first.innerHTML = 'BROWN BEARS ARE AWESOME!';

//Despite 'style' being an unresolved variable, this code works.
first.parentNode.style.backgroundColor = 'beige';