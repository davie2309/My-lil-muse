let intro = document.querySelector('.intro');
let logoSpan = document.querySelectorAll('.tion');
let cardContainers = document.querySelectorAll('.box');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, idx * 480);
        });
    }, 500);

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, idx * 480 + 500);
        });
    }, 3000);

    setTimeout(() => {
        intro.style.top = '-100vh';
        cardContainers.forEach(container => {
            container.style.display = 'grid';
        });
    }, 2300);
});
