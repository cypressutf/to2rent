// Fancybox.bind('[data-fancybox="gallery"]', {
// 	loop: true,
// 	buttons: ['zoom', 'close'],
// });
// console.log('Fancybox loaded via UMD');

$(function () {
	$('.header__slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-prev.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-next.svg"></button>',
		fade: true,
		responsive: [
			{
				breakpoint: 601,
				settings: {
					arrows: false,
					autoplay: true
				}
			},
		]
	});
	$('.menu__btn').on('click', function () {
		$('.menu__list').slideToggle();
	}),

		$('.menu__btn').on('click', function () {
			$('.menu__list').slideToggle();
		});

	$(".menu, .form__title").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 1000);
	});
});