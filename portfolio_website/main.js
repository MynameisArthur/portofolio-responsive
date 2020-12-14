const bodyElement = document.querySelector('body');
const menuToggle = document.querySelector('.hamburger-menu');
const heroElement = document.querySelector('.hero');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    bodyElement.classList.toggle('is-open');
    heroElement.classList.add('is-open');
});

navList.addEventListener('click', (e) => {
    let clickedElement = e.target;
    if (clickedElement.classList[0] === 'nav-link') {
        bodyElement.classList.remove('is-open');
    }
});

window.addEventListener('click', (e) => {
    let clickedElement = e.target;
    if (clickedElement.matches('.is-open')) {
        [bodyElement, heroElement].forEach((elem) =>
            elem.classList.remove('is-open')
        );
    }
});
