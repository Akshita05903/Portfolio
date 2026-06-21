// Smooth Scroll Navigation
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {

        const targetId = this.getAttribute('href');

        if(targetId.startsWith('#')){
            e.preventDefault();

            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Active Navbar Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if(link.getAttribute('href') === `#${current}`){
            link.classList.add('active');
        }
    });
});


// Home Buttons
const hireBtn = document.querySelector('.btn-1');
const skillBtn = document.querySelector('.btn-2');

if(hireBtn){
    hireBtn.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

if(skillBtn){
    skillBtn.addEventListener('click', () => {
        document.querySelector('#skills').scrollIntoView({
            behavior: 'smooth'
        });
    });
}


// Fade Animation on Page Load
window.addEventListener('load', () => {
    document.body.style.opacity = "1";
});