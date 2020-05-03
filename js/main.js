const toggleButton = document.querySelector('.nav--button');
const navigationMenu = document.querySelector(".nav--menu");
toggleButton.addEventListener("click", function(){
    console.log("clicked");
    navigationMenu.classList.toggle("show");
});