var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 50,
    // loop: true,
    pagination: {
        el: '.swiper-pagination-h',
        clickable: true,
    },
    history: {
        key: '',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
  var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    spaceBetween: 50,
    mousewheel: true,
    mousewheelControl: true,
    pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
    },
    history: {
      key:  '',
    }
  });
  