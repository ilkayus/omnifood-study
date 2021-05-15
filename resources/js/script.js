$(document).ready(function () {
  //   $("h1").click(function () {
  //     $(this).css("background-color", "red");
  //   });
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky animate__animated animate__fadeIn");
      } else {
        $("nav").removeClass("sticky animate__animated animate__fadeIn");
      }
    },
    { offset: "60px;" }
  );

  $(".js--section-features").waypoint(
    function (direction) {
      $(".animated-row-features").removeClass("hidden");
      $(".animated-row-features").addClass(
        "animate__animated animate__fadeInUp"
      );
    },
    { offset: "400px;" }
  );
  $(".section-steps").waypoint(
    function (direction) {
      $(".animated-row-works").removeClass("hidden");
      $(".animated-row-works").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "400px;" }
  );
  $(".section-cities").waypoint(
    function (direction) {
      $(".animated-row-cities").removeClass("hidden");
      $(".animated-row-cities").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "400px;" }
  );
  $(".section-plans").waypoint(
    function (direction) {
      $(".animated-row-plans").removeClass("hidden");
      $(".animated-row-plans").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "300px;" }
  );

  $(".icon-nav").click(function () {
    let nav = $(".main-nav");
    $(".icon-nav-open").toggleClass("hidden-none");
    $(".icon-nav-close").toggleClass("hidden-none");
    nav.slideToggle(200);
  });
  // scroll to sections
  //   $(".js--scroll-to-plans").click(function () {
  //     $("html,body").animate(
  //       { scrollTop: $(".js--section-plans").offset().top },
  //       1000
  //     );
  //   });
  //   $(".js--scroll-to-start").click(function () {
  //     $("html,body").animate(
  //       { scrollTop: $(".js--section-features").offset().top },
  //       1000
  //     );
  //   });
});
