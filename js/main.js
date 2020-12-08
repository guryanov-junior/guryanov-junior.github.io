(function () {
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.scrollY > 100) {
			header.classList.add('header__active');
		}
		else {
			header.classList.remove('header__active');
		}
	};
}());

(function() {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header__menu');
	const menuCloseItem = document.querySelector('.header__menu-close');
	const body = document.querySelector('body');
	burgerItem.addEventListener('click', function() {
		menu.classList.add('header__menu_active');
		body.classList.add('lock'); 
	});
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header__menu_active');
		body.classList.remove('lock')
	})
}());

