var tag = document.getElementById('about');
var button = document.querySelector('button');
var img = document.querySelector('img')
var hello =document.querySelector('p')
var h1 =document.querySelector('h1')


button.addEventListener('click', function(){
    tag.classList.toggle('about');
    button.style.display = "none";
    img.style.display = "none";
    hello.style.display = "none";
    h1.style.marginTop = "30px";
     
});



