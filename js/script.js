const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollX > 80)
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal({
    origin: 'top',
    distance:'85px',
    duration: 1500,
    reset: true
})

sr.reveal('.home-text', {delay:50});
sr.reveal('.home-img', {delay:70});
sr.reveal('.container', {delay:70});

sr.reveal('.about-img', {});
sr.reveal('.about-text', {delay:50});

sr.reveal('.middle-text', {});
sr.reveal('.row-btn,.shop-content', {delay:50});

sr.reveal('.review-content,.contact', {delay:50});