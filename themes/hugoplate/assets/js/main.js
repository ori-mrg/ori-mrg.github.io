// Carousels used on the home and industry partnerships pages.
document.addEventListener("DOMContentLoaded", function () {
  const bannerCarousel = document.querySelector(".banner-carousel");
  if (bannerCarousel) {
    new Swiper(".banner-carousel", {
      loop: true,
      autoplay: {
        delay: 50000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".banner-carousel .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".banner-carousel .swiper-button-next",
        prevEl: ".banner-carousel .swiper-button-prev",
      },
      slidesPerView: 1,
      spaceBetween: 0,
    });
  }

  const partnersCarousel = document.querySelector(".partners-carousel");
  if (partnersCarousel) {
    new Swiper(".partners-carousel", {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".partners-carousel .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".partners-carousel .swiper-button-next",
        prevEl: ".partners-carousel .swiper-button-prev",
      },
      spaceBetween: 24,
      breakpoints: {
        // mobile
        0: {
          slidesPerView: 2,
        },
        // small tablets / landscape phones
        576: {
          slidesPerView: 3,
        },
        // tablets / small laptops
        768: {
          slidesPerView: 4,
        },
        // larger screens
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      },
      // Make clickable slides easier to tap
      grabCursor: true,
    });
  }
});
