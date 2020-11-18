$(document).ready(function () {
  $(".menu-socail").click(function () {
    $(".socail-open ").fadeToggle();
  });
  // Magnafic Popup
  $(".protfolio-content").magnificPopup({
    gallery: {
      enabled: true,
    },
    type: "image",
  });
  $(".counter-up").counterUp({
    delay: 10,
    time: 1000,
  });
  $(".test-content").owlCarousel({
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
    items: 1,
  });
});

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
    if ($(this).scrollTop() > 200) {
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
});
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-toggle="tooltip"]')
);
