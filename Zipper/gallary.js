// var swiper = new Swiper(".Swiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 4,
//       slideShadows: true,
//       autoplay: {
//         delay: 3000,
//       },
      
//     },
//     // pagination: {
//     //   el: ".swiper-pagination",
//     // },
//   });

var swiper = new Swiper(".Swiper", {
    spaceBetween: 30,
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
      delay: 3700,
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