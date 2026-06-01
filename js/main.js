


const swiper = new Swiper('.swiper', {

    loop: true,
    slidePerview: 1,


    breakpoints: {
    768: {
    slidesPerView: 2,
  },
  },

    autoplay: {
    delay: 3000,
  },

    pagination: {
    el: '.swiper-pagination',
  },

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});
