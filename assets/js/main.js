let page = document.getElementById("page");
let submenu = document.getElementById("submenu");

page.addEventListener("click", open);
function open(){
    submenu.classList.toggle("hidden");
}

let hamburger= document.getElementById("hamburger");
let list =document.getElementById("list");

hamburger.addEventListener("click", openMobileMenu);
function openMobileMenu(){
   list.classList.toggle("show");
}