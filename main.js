
let currentYear = new Date().getFullYear();
let copyrightNotice = document.createElement("footer");
copyrightNotice.innerHTML = "Copyright © " + currentYear + " Jamie Marlow. All Rights Reserved";
document.body.appendChild(copyrightNotice);

$(document).ready(function(){
  $('#myCarousel').carousel();
});

$('.carousel').carousel({
  interval: 6000
})



  



