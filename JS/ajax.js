// we want to fetch and display a random dad jok from the icanhazdadjoke API

const app = document.querySelector('#joke');
const uri = 'https://icanhazdadjoke.com/'; //backend API
const refreshbtn = document.querySelector('#refresh');

let xhr = new XMLHttpRequest(); //creating an object
xhr.addEventListener('load', function () {
  joke.innerHTML = `<h1>${this.responseText}</h1>`;
}); //fired once the data is received by the server

//get a GET request to the url once we click on the button
refreshbtn.addEventListener('click', function () {
  xhr.open('GET', uri); //open an request
  xhr.setRequestHeader('Accept', 'text/plain'); //set request header
  xhr.send(); // send the request
});
