const openNav = document.querySelector(".div1 i");
const closeNav = document.querySelector(".mobile-nav-collapse header i");
const mobile_nav_container = document.querySelector(".mobile-nav-collapse");

openNav.addEventListener("click", ()=>{
    mobile_nav_container.style.visibility = "visible";
});

closeNav.addEventListener("click", ()=>{
    mobile_nav_container.style.visibility = "hidden";
})