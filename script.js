const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const navSearch = document.getElementById("nav-search");

// Toggle the menu open/close on click
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close the menu when clicking on a nav link
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Toggle the search bar open/close on click
navSearch.addEventListener("click", (e) => {
    navSearch.classList.toggle("open");
});

// ScrollReveal setup
const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000
};

// Use ScrollReveal (Note the capitalization)
ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOptions,
    origin: "right",
});
ScrollReveal().reveal(".header_image div", {
    duration: 1000,
    delay: 500,
});
ScrollReveal().reveal(".header_image h1", {
    ...scrollRevealOptions,
    delay: 1000,
});

ScrollReveal().reveal(".header_content div", {
    duration: 1000,
    delay: 1500,
});
ScrollReveal().reveal(".deals-card", {
    ...scrollRevealOptions,
    interval:500,
});
ScrollReveal().reveal(".about_image img", {
    ...scrollRevealOptions,
   origin:"right",
});
ScrollReveal().reveal(".about_card", {
    duration: 1000,
    interval:500,
    delay: 500,
});
const swiper=new Swiper(".swiper",{
    loop:true,
})
