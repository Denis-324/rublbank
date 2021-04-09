$(document).ready(function () {
   $(".menu-burger__header ").click(function (event) {
      $(".menu-burger__header,.main-menu ").toggleClass("active");
   });
});

$(document).ready(function () {
   $(".main-menu ").click(function (event) {
      $(".menu__item,.main-menu,.menu-burger__header").toggleClass("active");
   });
});


$(document).ready(function () {
   $(".header-logo ").click(function (event) {
      $(".header-logo,.header-blok-right,.header-link, .header-blok-right ul  ").toggleClass("active");
   });
});

$(document).ready(function () {
   $(".header-blok-right ul ").click(function (event) {
      $(".header-blok,.header-blok-right,.header-link a,.header-logo a ").toggleClass("active");
   });
});