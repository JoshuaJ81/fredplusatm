//hamburger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})

//did a "for each" link when clicked, the hamburger and navmenu will go away, hence "removed"

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))


const card = document.querySelector('.phone-card');

card.addEventListener('click', () => {
        card.classList.toggle('flip');
    });

const mail = document.querySelector('.email-card');

mail.addEventListener('click', () => {
    mail.classList.toggle('flip');
});