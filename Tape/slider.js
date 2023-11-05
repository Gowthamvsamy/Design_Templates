var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1,
    watchOverflow: true,
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
    roundLengths: true,
    effect: 'slide',
	loop: true,
    speed: 1000,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });