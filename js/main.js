$(document).ready(function () {
  var navHeight = $(".bottom_nav").outerHeight();
  var modalHeight = $(".reserve_modal").outerHeight();

  $(".installation_wrap").each(function (index) {
    $(this).attr("data-index", index);
  });

  $(".tab_title_3")
    .each(function (index) {
      $(this).attr("data-index", index);
    })
    .click(function () {
      var clicked = $(this).attr("data-index");
      $(".tab_title_3").removeClass("tab_title_3_active");
      $(".tab_title_3").eq(clicked).addClass("tab_title_3_active");
      $(".installation_wrap").removeClass("installation_wrap_active");
      $(".installation_wrap").eq(clicked).addClass("installation_wrap_active");
    });

  $(".heart").on("click", function () {
    $(this).toggleClass("active");
  });

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.3,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    spaceBetween: 100,
    loop: true,
    breakpoints: {
      767: {
        spaceBetween: 100,
      },
      450: {
        spaceBetween: 100,
      },
      350: {
        spaceBetween: 80,
      },
    },
  });
  var num = 0;
  $(".reserve_btn").click(function () {
    if (num === 0) {
      $(".reserve_modal").addClass("active");
      $("body").css({
        "overflow-y": "hidden",
      });
      num++;
    } else if (num === 1) {
      $(".reserve_modal").removeClass("active");
      $("body").css({
        "overflow-y": "unset",
      });
      num--;
    }
  });

  $(".modal_close").click(function () {
    $(".reserve_modal").removeClass("active");
  });
  $(".filter_btn").on("click", function () {
    $(this).toggleClass("active");
  });
});
