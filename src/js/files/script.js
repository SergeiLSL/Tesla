// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//========================================================================================================================================================
// МЕНЮ

const headerBtn = document.querySelector('.header__btn');
const menuBody = document.querySelector('.menu__body');
if (headerBtn) {
	headerBtn.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock'); // добавляем класс замок - запрещаем прокручиваться странице при открытом меню
		// для решения обращаемся к body и доавляем "overflow: hidden;"
		headerBtn.classList.toggle('_active'); // при обращении к бургеру добавляем класс _active
		headerBody.classList.toggle('_active'); // при обращении к бургеру добавляем класс _active
	});
}


//========================================================================================================================================================
// slider Slick
// $(document).ready(function(){
// 	$('.slider').slick({
// 		arrows:true,
// 		dots:true,
// 		slidesToShow:3,
// 		autoplay:true,
// 		speed:1000,
// 		autoplaySpeed:800,
// 		responsive:[
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					slidesToShow:2
// 				}
// 			},
// 			{
// 				breakpoint: 550,
// 				settings: {
// 					slidesToShow:1
// 				}
// 			}
// 		]
// 	});
// });

//========================================================================================================================================================
// slider Swiper
