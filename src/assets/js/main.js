const burger = document.querySelector('.burger');
const body = document.body;
const overlay = document.querySelector('.overlay');
const headerMobileMenu = document.querySelector('.header__wrapper');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	headerMobileMenu.classList.toggle('active');
	body.classList.toggle('lock');
	overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
	burger.classList.remove('active');
	headerMobileMenu.classList.remove('active');
	body.classList.remove('lock');
	overlay.classList.remove('active');
});
