// /=============== SHOW MENU ===============/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// /=============== REMOVE MENU MOBILE ===============/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// /=============== SHADOW HEADER ===============/
const shadowHeader = () =>{
    const header = document.getElementById("header")
    this.scrollY >=50 ? header.classList.add("shadow-header"):header.classList.remove("shadow-header")
}
window.addEventListener("scroll", shadowHeader)


// /=============== SCROLL UP ===============/

const scrollup = () =>{
    const scrollup = document.getElementById("scroll-up")
    this.scrollY >= 350 ? scrollup.classList.add("show-scroll")
                   : scrollup.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollup)
