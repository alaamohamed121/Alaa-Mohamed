let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.pageYOffset;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.pageYOffset > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});


const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

sr.reveal('.home-content, .heading', {origin:'top'});
sr.reveal('.home-img, .services-box, .contact form', {origin:'bottom'});
sr.reveal('.home-content h1, .about-img', {origin:'left'});
sr.reveal('.home-content p, .about-content', {origin:'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst','Desktop Application Developer' , 'Web Scrapper' , 'Software Developer' , 'Social Media Marketer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const typed2 = new Typed('.multiple-text2', {
    strings: ['Data Analyst','Desktop Application Developer' , 'Web Scrapper' , 'Software Developer' , 'Social Media Marketer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});