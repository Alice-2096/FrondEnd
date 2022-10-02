const cat_left = document.querySelectorAll('.cat-left');
const cat_right = document.querySelectorAll('.cat-right');
const my_selfie = document.getElementById('self'); 

// img.addEventListener('click', function(evt){
//     if (evt.target.getAttribute('class') === 'cat-left'){
//         console.log('hello');
//     }
// })


cat_left.forEach((cat) => 
{
    cat.addEventListener('click', function(e){
        my_selfie.src = "imgs/shadowfax.jpeg"; 
    })
})

cat_right.forEach((cat) => 
{
    cat.addEventListener('click', function(e){
        my_selfie.src = "imgs/Umbra.jpeg"; 
    })
})

setInterval(myTimer, 10000); 

function myTimer(){
    console.log('timer'); 
    my_selfie.src = "imgs/selfie.png"; 
}

