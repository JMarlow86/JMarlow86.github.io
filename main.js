var tag = document.getElementById('about');
var button = document.querySelector('button');
var img = document.querySelector('img');
var h1 =document.querySelector('h1');
var ul =document.getElementById('fun-bar');


button.addEventListener('click', function(){
    tag.classList.toggle('about');
    button.style.display = "none";
    img.style.display = "none";
    ul.style.display = "none";
    
     
});



