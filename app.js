const frontpage = document.querySelector('.frontpage');
const heading = document.querySelector('.heading');
const arrow = document.querySelector('.arrow');
const tiles = document.querySelector('.tiles');

const cards = document.querySelector('.cards');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');

document.addEventListener('scroll', () => {
    let scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    let fopacity = Math.max(1 - (scrollPercent / 20), 0);
    let aopacity = 1;

    if (fopacity<0.2) {
        fopacity = 0;
    };

    if (fopacity<1) {
        aopacity = 0;
    }
    
    arrow.style.opacity = aopacity;
    frontpage.style.opacity = fopacity;
    frontpage.style.transform = `translateY(${window.scrollY/4}px)`;
});