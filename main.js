

//======================== header slider ========================


$(".header__slider")
  .slick({
    autoplay: true,
    fade: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
  })

  $('.header__slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.header__slider').slick('slickPlay');
  });
