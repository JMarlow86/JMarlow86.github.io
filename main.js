var tag = document.getElementById('demo');
var button = document.querySelector('button');
var img = document.querySelector('img')
button.addEventListener('click', function(){
tag.classList.toggle('demo');
button.style.display = "none";
img.style.display = "none";
});

// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();   
//   });

 