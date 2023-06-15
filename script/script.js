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
		modalWondow = document.querySelector('.poster-modal-winow'),
		allPosters = document.querySelectorAll('.modal-menu__poster-item'),
		nextSlideTrigger = document.querySelector('.modal-menu__next'),
		previosSlideTrigger = document.querySelector('.modal-menu__prewios');

	let slideIndex = 0;


	function openCloseModal (openTrigger,closeTriger,changeClass) {

		openTrigger.addEventListener('click',function(){
			changeClass.style.display = 'flex';
		});
	
		closeTriger.addEventListener('click', function (){
			changeClass.style.display = 'none';
		})
	}

	openCloseModal (openModalTrigger,closeModalTrigger,modalWondow);

	

	function showSlides (visibleSlide) {

		function hideSlides () {
			allPosters.forEach(e => {
				e.style.display = 'none';
			})
		};
	
		hideSlides();

		allPosters[visibleSlide].style.display = 'block';
	}

	showSlides(slideIndex);

	function slideNavigation () {
		nextSlideTrigger.addEventListener('click', function(){
			slideIndex++;

			if(slideIndex > (allPosters.length - 1)){
				slideIndex = 0
			}

			showSlides(slideIndex);
		})

		previosSlideTrigger.addEventListener('click', function (){
			slideIndex--;

			if(slideIndex < 0){
				slideIndex = allPosters.length - 1
			};

			showSlides(slideIndex);
		})

	}

	slideNavigation();

//--------------------
//----Modal-wondow-our-posters
//--------------------

	function  ourPostersSlides () {
		const allSlides = document.querySelectorAll('.our-productions__slide'),
				slidesVisible = document.querySelector('.our-productions__slides-all'),
				nextTrigger = document.querySelector('.our-productions__navigation-right'),
				previousTrigger = document.querySelector('.our-productions__navigation-left'),
				widthSlide = window.getComputedStyle(allSlides[1]).width;

		let slideIndex = 2;
		let widthSlideValue = widthSlide.slice(0,-2);

		function showSlidePosters(currentSlide) {
			allSlides.forEach( el => el.classList.add('slideAnimation'));
			allSlides.forEach( el => el.style.opacity= '0.3');
			allSlides.forEach( el => el.style.transform = 'scale(0.8)');
			allSlides[currentSlide -1].style.opacity = '1';
			allSlides[currentSlide -1].style.transform = 'scale(1)';
			slidesVisible.style.left = `-${widthSlideValue * (currentSlide-1)}px`;
		}

		showSlidePosters(slideIndex);

		nextTrigger.addEventListener('click', function(){
			slideIndex++;

			if(slideIndex > (allSlides.length)){
				slideIndex = 1
			}
			console.log(slideIndex)

			showSlidePosters(slideIndex);
		})

		previousTrigger.addEventListener('click', function (){
			slideIndex--;

			if(slideIndex < 1){
				slideIndex = allSlides.length;
			};
			console.log(slideIndex)

			showSlidePosters(slideIndex);
		})



	}

	ourPostersSlides();

});