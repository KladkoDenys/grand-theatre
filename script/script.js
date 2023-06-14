"use strict";

document.addEventListener('DOMContentLoaded', () => {
//--------------------
//----Burger-menu
//--------------------
const openBurgerTrigger = document.querySelector('#burger-menu-open-trigger'),
	closeBurgerTrigger = document.querySelector('#burger-menu__close-trigger'),
	burgerMenu = document.querySelector('.burger-menu');

function openCloseBurger (openTrigger,closeTriger,changeClass) {

	openTrigger.addEventListener('click',function(){
		changeClass.style.left = '0';
	});

	closeTriger.addEventListener('click', function (){
		changeClass.style.left = '-100%';
	})
}
openCloseBurger(openBurgerTrigger,closeBurgerTrigger,burgerMenu);



//--------------------
//----Modal-wondow-posters
//--------------------
const openModalTrigger = document.querySelector('.header-main-part__button-open-modal'),
	closeModalTrigger = document.querySelector('#modal-menu__close'),
	modalWondow = document.querySelector('.poster-modal-winow');


	function openCloseModal (openTrigger,closeTriger,changeClass) {

		openTrigger.addEventListener('click',function(){
			changeClass.style.display = 'block';
		});
	
		closeTriger.addEventListener('click', function (){
			changeClass.style.display = 'none';
		})
	}

	openCloseModal (openModalTrigger,closeModalTrigger,modalWondow);


});