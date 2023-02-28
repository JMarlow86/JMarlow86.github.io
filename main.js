
let currentYear = new Date().getFullYear();
let copyrightNotice = document.createElement("footer");
copyrightNotice.innerHTML = "Copyright © " + currentYear + " Jamie Marlow. All Rights Reserved";
document.body.appendChild(copyrightNotice);



function search(){
  let textToSearch = document.getElementById("text-to-search").value;
  let forSearch = document.getElementById("forSearch");
  textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

  let pattern = new RegExp(`${textToSearch}`,"gi");

  forSearch.innerHTML = forSearch.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}