$(() => {
  $(".search").on("click", () => {
    $(".search-overlay").slideDown();
  });
  $(".close").on("click", () => {
    $(".search-overlay").slideUp();
  });
  $(".slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });
});
