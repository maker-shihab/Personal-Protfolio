$(document).ready(function () {
  function Maheraz_Custom_JS() {
    var windowS = $(window),
      windowH = windowS.height(),
      projecthoverS = $(".portfolio-hover"),
      projecthoverH = projecthoverS.height(),
      proejectdevide = projecthoverH / 2;
    projecthoverS.css({
      marginTop: -proejectdevide,
    });
  }
  //  Onepage Nav

  if ($.fn.onePageNav) {
    $(".mainmenu .nav").onePageNav({
      currentClass: "active",
      scrollSpeed: 1000,
      easing: "easeInOutQuart",
    });
  }

  // Sticky JS

  jQuery(window).on("scroll", function () {
    if ($(this).scrollTop() > 1) {
      $("#header").addClass("sticky");
    } else {
      $("#header").removeClass("sticky");
    }
  });

  // 	Mobile Menu
  $(".menu").slicknav({
    prependTo: ".mobile-nav",
    closeOnClick: true,
  });

  // 	Social JS
  $(".social-icon li a").on("click", function () {
    $(".social").toggleClass("active");
  });
});
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-toggle="tooltip"]')
);
