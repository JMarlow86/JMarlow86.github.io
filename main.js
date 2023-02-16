var tag = document.getElementById('demo');
var button = document.querySelector('button');
var img = document.querySelector('img')
button.addEventListener('click', function(){
tag.classList.toggle('demo');
button.style.display = "none";
img.style.display = "none";
});

// var target = document.getElementById('fse-link');
// var tag = document.getElementById('demo');
// var link = document.querySelector('a'); 
// link.addEventListener('click',function() {
// target.classList.toggle('demo')
// });

// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();   
// //   });

// const link = document.querySelector('a');
// const 
// link.addEventListener('mouseover', () => {
//     link.classList.add('hovered');
// });

// link.addEventListener('mouseout', () => {
//     link.classList.remove('hovered');
// });
 