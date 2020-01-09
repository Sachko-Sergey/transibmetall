$(document).ready(function () {

   $('.header__slider').slick({
      cssEase: 'ease-in-out',
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      dotsClass: 'header__slider-dots',
      prevArrow: '<button type="button" class="slick-prev header__arrow-prev"><img src="img/index_page/header/icons/prev.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next header__arrow-next"><img src="img/index_page/header/icons/next.svg" alt=""></button>'
   });

   
   $('.news-slider').slick({
      slidesToShow: 4,
      cssEase: 'ease-in-out',
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      dotsClass: 'news-slider__slider-dots',
      prevArrow: '<button type="button" class="slick-prev news-slider__arrow-prev"><img src="img/index_page/news/icons/prev.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next news-slider__arrow-next"><img src="img/index_page/news/icons/next.svg" alt=""></button>'
   });


   $('.header-top__center-lang').styler();
   $('.footer-inner__right-bottom-lang').styler();
   $('.product-filter__brand').styler();
   

   
   $('.header__slider').on('afterChange', function (event, slick, currentSlide) {
      $("#cp").text(currentSlide + 1);
   });

   document.querySelector('.h-menu__wrap').onclick = function () {
      document.querySelector('.h-menu__btn').classList.toggle('active');
      document.querySelector('.header-top__center').classList.toggle('active');
      document.querySelector('.header-top__buttons').classList.toggle('active');
      document.querySelector('.header-top').classList.toggle('active');
   };

}); 