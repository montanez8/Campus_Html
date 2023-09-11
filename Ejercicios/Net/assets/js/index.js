const  nav_btn = document.querySelector(".nav__btn-menu");
const nav_menu = document.querySelector(".nav__list");

nav_btn.addEventListener("click" , () =>{
    nav_menu.classList.toggle("nav__list_visible");
});