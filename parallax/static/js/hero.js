const d = document;
const navbar = d.getElementById('navbar')
const stars = d.getElementById('stars');
const moon = d.getElementById('moon');
const mountains_behind = d.getElementById('mountains_behind');
const text = d.getElementById('text');
const btn = d.getElementById('btn');
const mountains_front = d.getElementById('mountains_front');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    stars.style.left = value * 0.25 +'px';
    moon.style.top = value * 1 +'px';
    mountains_behind.style.top = value * 0.5 +'px';
    mountains_front.style.top = value * 0 +'px';
    text.style.marginRight = value * 4 +'px';
    text.style.marginTop = value * 1.5 +'px';
    btn.style.marginTop = value * 1.5 +'px';
    navbar.style.top = value * 0.5 +'px';

})

