var tag = document.getElementById('demo');
var button = document.querySelector('button');
button.addEventListener('click', function(){
tag.classList.toggle('demo');
button.style.display = "none";
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

  function intro(){
    let intro = 'Hello!';
    console.log('hello');
    return intro; 
  }