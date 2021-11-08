// ins variabili 

const openMenu = document.querySelector('.fas.fa-bars');
const closeMenu = document.querySelector('.close')

// operazioni 

openMenu.addEventListener("click", function(){
    document.querySelector(".hamburger-menu").classList.add("active");
});

closeMenu.addEventListener("click", function(){
    document.querySelector(".hamburger-menu").classList.remove("active");
});