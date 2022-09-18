//change text on button with mouse over and mouse out

const btnText = document.querySelector('.btn');

function changeText() {
btnText.innerHTML = 'LEARN MORE';
}
btnText.addEventListener('mouseover', changeText);

function oldText(){
btnText.innerHTML = 'CLICK HERE';
}
btnText.addEventListener('mouseout', oldText);

//hamburger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

