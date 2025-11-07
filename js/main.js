$(document).ready(function () {
  var navHeight = $(".bottom_nav").outerHeight(); // 70px
  var modalHeight = $(".reserve_modal").outerHeight();

  $(".reserve_btn").on("click", function () {
    // 모달이 네비 위에 딱 붙도록
    $(".reserve_modal").css("bottom", navHeight + "px");
  });

  $(".close_modal").on("click", function () {
    // 다시 숨기기
    $(".reserve_modal").css("bottom", -modalHeight + "px");
  });
});
