$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="/images/arrow-left.svg" alt="arrow left" /></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="/images/arrow-right.svg" alt="arrow left" /></button>',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".tab").on("click", function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass("tab--active");
    $($(this).parent().siblings().find("div")).removeClass(
      "tabs-content--active"
    );
    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");
  });

  $(".product__item-favorite").on("click", function () {
    $(this).toggleClass("product__item-favorite--active");
  });

  $(".product__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="popular__slider-btn popular__slider-btnprev"><img src="/images/popular-arrow-left.svg" alt="arrow left" /></button>',
    nextArrow:
      '<button class="popular__slider-btn popular__slider-btnnext"><img src="/images/popular-arrow-right.svg" alt="arrow left" /></button>',
  });

  $(".filter-style").styler();

  $(".filter__item-drop").on("click", function () {
    $(this).toggleClass("filter__item-drop--active");
    $(this).next().slideToggle(200);
  });

  $(".js-range-slider").ionRangeSlider({
    min: 5000,
    max: 20000,
  });

  $(".menu__btn").on("click", function () {
    $(".menu-mobile__list").toggleClass("menu-mobile__list-active");
  });
});
