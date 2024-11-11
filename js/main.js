$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="/images/arrow-left.svg" alt="arrow left" /></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="/images/arrow-right.svg" alt="arrow left" /></button>',
  });

  $(".tab").on("click", function (e) {
    e.preventDefault();
    $(".tab").removeClass("tab--active");
    $(".tabs-content").removeClass("tabs-content--active");
    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");
  });

  $(".product__item-favorite").on("click", function () {
    $(".product__item-favorite").toggleClass("product__item-favorite--active");
  });

  $(".product__slider").slick({
    slidesToShow: 4,
    prevArrow:
      '<button class="popular__slider-btn popular__slider-btnprev"><img src="/images/popular-arrow-left.svg" alt="arrow left" /></button>',
    nextArrow:
      '<button class="popular__slider-btn popular__slider-btnnext"><img src="/images/popular-arrow-right.svg" alt="arrow left" /></button>',
  });
});
