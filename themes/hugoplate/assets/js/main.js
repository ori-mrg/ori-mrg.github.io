// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
})();

// Initialize banner carousel and partners carousel
document.addEventListener("DOMContentLoaded", function () {
  // Banner carousel (existing)
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

  // Partners carousel (new)
  // Expects HTML markup similar to other carousels:
  // <div class="swiper partners-carousel">
  //   <div class="swiper-wrapper"> ... .swiper-slide items ... </div>
  //   <div class="swiper-pagination"></div>
  //   <div class="swiper-button-prev"></div>
  //   <div class="swiper-button-next"></div>
  // </div>
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
