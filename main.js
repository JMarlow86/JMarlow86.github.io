
// FOOTER CODE
let currentYear = new Date().getFullYear();
let copyrightNotice = document.createElement("footer");
copyrightNotice.innerHTML = "Copyright © " + currentYear + " Jamie Marlow. All Rights Reserved";
document.body.appendChild(copyrightNotice);



// RESUME SKILLSET SEARCH BAR
function search_skills() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('skills');
  
  
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
          
      }
      else {
          x[i].style.display="list-item"; 
          
         
      }
  }
}

$(document).ready(function() {
    $('#myCarousel').carousel({
      interval: 10000
    });
  });

