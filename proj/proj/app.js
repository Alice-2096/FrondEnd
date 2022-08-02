const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; 
const btn = document.getElementById("btn"); 
const color = document.querySelector(".color");  // returns the first Element within the document that matches the specified selector

//sets up a function that will be called whenever the button is clicked 
btn.addEventListener('click', function(){
    // get a random number between 0 and 3 
    const randomNumber = 2; 
    document.body.style.backgroundColor = colors[randomNumber]; 
    color.textContent = colors[randomNumber]; 
});

