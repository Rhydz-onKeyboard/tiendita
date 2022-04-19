const toggleMenu = () => {

    const menuToggle = document.querySelector('.btn');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

}

const titleScroll = document.querySelector('.titleScroll');
const text = document.querySelector('.text');
const innerText = document.querySelector('.innerText');
const pathName = window.location.pathname;
if (pathName === '/tiendita') {
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        let value5 = value/10
        titleScroll.style.clipPath = `circle( ${value}px at center center )`;
        text.style.left = 100 - value/5 +'%';
        innerText.style.left = 100 - value/5 +'%';
    })
}

// console.log(pathName);
// const footer = document.querySelector('footer');
// else {
//     footer.style.position = 'absolute';
// }

