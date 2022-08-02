const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; 
// #+6 digits/letters
const btn = document.getElementById("btn"); 
const color = document.querySelector(".color");  // returns the first Element within the document that matches the specified selector

btn.addEventListener('click', function(){
    let hexColor = "#"; 
    for (let i = 0; i < 6; i++){
        let rand = getRandomNumber(); 
        hexColor += hex[rand]; 
    }
    document.body.style.backgroundColor = hexColor; 
    color.textContent = hexColor; 
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length); 
}
