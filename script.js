window.addEventListener("scroll", function(){
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})

const hamburger = document.querySelector("#hamburger");
const navLink = document.querySelector(".nav-links");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navLink.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navLink.classList.remove("active");
}))

