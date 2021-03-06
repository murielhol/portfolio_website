// make loader icon fade out first and then inner container
$(window).on("load", function () {
  $(".loader .inner").fadeOut(500, function () {
    $(".loader").fadeOut(1000);
    $("html,body").scrollTop(100);
  });

  // filtering the portfolio items
  // start with selecting all fields
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
  });
});

$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["Data Scientist", "Developer"],
    typeSpeed: 50,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 5,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      938: {
        items: 5,
      },
    },
  });


  // filtering the portfolio items
  // start with selecting all fields
  $("#filters a").click(function () {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false,
      },
    });
    return false; // dont do anything else so dont re-load page
  });

  // make navigation go to link a little more smoothly
  $("#navigation li a").click(function (e) {
    e.preventDefault(); // prevent default behaviour=fast not smooth

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  // fixed variable that know navigation section top
  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
