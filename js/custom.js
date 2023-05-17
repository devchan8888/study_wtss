// 라이트 박스
$(".lightbox").lightGallery({
  thumbnail: true,
  animateThumb: false,
  showThumbByDefault: false,
  progressBar: true,
  autoplay: true,
  speed: 1000,
  licenseKey: "your_license_key",
});

// 레이어 팝업
$(".layer").click(function (e) {
  e.preventDefault();
  // $("#layer").css("display", "block");
  // $("#layer").show()
  // $("#layer").fadeIn()
  $("#layer").slideDown();
});

$("#layer .close").click(function (e) {
  e.preventDefault();
  $("#layer").slideUp();
});

// 윈도우 팝업
$(".window").click(function (e) {
  e.preventDefault();
  // window.open("파일명", "팝업이름", "옵션설정");
  // 옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars. fullscreen...
  window.open(
    "popup.html",
    "1번 popup",
    "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"
  );
});

// 탭메뉴
let $tab_list = $(".tab_menu");
$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e) {
  e.preventDefault();
  var $this = $(this);
  $this
    .next("ul")
    .show()
    .parent("li")
    .addClass("active")
    .siblings("li")
    .removeClass("active")
    .find(">ul")
    .hide();
}

$tab_list
  .find("ul>li>a")
  .click(tabMenu)
  .focus(tabMenu); /* 웹표준을 위해 focus 넣어줌 */

// 배너 slick 사용
// html 마크업 셋팅 -> css 연동 -> jQeury 연동 -> slick 제이커리 호출(plugin)
$(".banner").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
});

// 갤러리 slick 사용
$(".gallery_img").slick({
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
});

$(".play").click(function () {
  $(".gallery_img").slick("slickPlay");
});

$(".pause").click(function () {
  $(".gallery_img").slick("slickPause");
});

$(".prev").click(function () {
  $(".gallery_img").slick("slickPrev");
});

$(".next").click(function () {
  $(".gallery_img").slick("slickNext");
});

// Navbar 버튼 클릭으로 전체 메뉴 확인
$(".tit .btn").click((e) => {
  e.preventDefault();
  $("#cont_nav").slideToggle(300);
  $(".tit .btn").toggleClass("on");
});
