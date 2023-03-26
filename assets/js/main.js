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

//Projects sort

let buttons =document.querySelectorAll(".project__btn");
for( let button of buttons){
    button.addEventListener("click", () =>{
       let category = button.getAttribute("data-category");
       let articles = document.querySelectorAll(".project__item")
       
       for(let article of articles){
        article.style.display = "none";
       }

       for (let article of articles) {
        if (article.getAttribute('data-category').includes(category)) {
            article.style.display = 'block';
        }
    }

    });
}

//Scroll To The Top

let scroll = document.getElementById("scrollTop");
scroll.addEventListener("click", myScroll);

function myScroll(){
    window({top:0, behavior:"smooth"});
}

window.addEventListener("scroll", showScroll);
function showScroll(){
    if (document.documentElement.scrollTop > 300){
        scroll.classList.add('scrollShow');
    }
    else{
        scroll.classList.remove('scrollShow');
      }
}
 