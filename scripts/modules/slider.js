new Swiper('.swiper', {
    slidesPerView: 2, 
    loop: true,
    autoplay: {
      delay: 3000,
    },
  
    navigation: {
      nextEl: '.album__right',
      prevEl: '.album__left',
    },
  
    keyboard: true,
  });
