let frontpage = document.querySelector('.frontpage');
let heading = document.querySelector('.heading');
let arrow = document.querySelector('.arrow');
let tiles = document.querySelectorAll('.tiles');

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