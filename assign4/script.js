const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", ()=>{
    navMenu.classList.toggle("left-[0]");
});

navLink.forEach(link =>{
    link.addEventListener("click", ()=>{
        navMenu.classList.toggle("left-[0]");
    })
})