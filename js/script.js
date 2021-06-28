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
});
