// ins variabili 

const openMenu = document.querySelector('i');
const closeMenu = document.querySelector('.close')

// operazioni 

openMenu.addEventListener("click", function(){
    document.querySelector(".hamburger-menu").style.display = "block";
});

closeMenu.addEventListener("click", function(){
    document.querySelector(".hamburger-menu").style.display = "none";
});