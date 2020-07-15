// The Document method querySelector() returns the first Element within the document 
// that matches the specified selector, or group of selectors. 
// If no matches are found, null is returned.


const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['#e84a5f', '#ff847c', '#feceab' , '#99b898', '#6ebfb5' , '#14b1ab']

body.style.backgroundColor = '#ff9a76';

/* Attach a click event to a <button> element. 
When the user clicks on the button, background color will change. */


button.addEventListener('click', changeBackground);

//The parseInt() function parses a string and returns an integer.
// Math.random() returns a random number between 0 and 1 

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length);
body.style.backgroundColor=colors[colorIndex];
}
