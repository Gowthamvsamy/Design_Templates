var swiper = new Swiper(".Swiper", {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 4,
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