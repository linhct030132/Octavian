// NAV_BAR FIXED WHEN SCROLL

window.onscroll = function () {
  var navElement = document.querySelector(".nav-bar");

  var headerElement = document.querySelector(".header");

  var scrollToTop = document.querySelector(".scroll-to-top");

  console.log(document.documentElement.scrollTop);

  if (document.documentElement.scrollTop >= 50) {
    navElement.style.height = "80px";
    headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  } else {
    navElement.style.height = "120px";
    headerElement.style.backgroundColor = "transparent";
  }

  if (document.documentElement.scrollTop >= 1500) {
    scrollToTop.style.opacity = "1";
  } else {
    scrollToTop.style.opacity = "0";
  }
};

//Scroll To Top

function goToTop() {
  $("html, body").animate({ scrollTop: 0 }, 1500);
}

$(".customer-slider").flickity({
  arrow:false,
  pageDots: false,
  autoPlay: 3000, // advance cells every 3 seconds
});

//Second-menu

$(document).ready(function () {

  //Menu-Secondary
  $(".second-menu-btn").click(function () {
    $(".second-menu-overlay").addClass("show");
    $("html").addClass("disable-scroll");
    $(".second-menu").animate({ right: "0px" }, 300, "easeInOutExpo");
  });

  $(".second-menu-overlay").click(function () {
    $(".second-menu-overlay").removeClass("show");
    $("html").removeClass("disable-scroll");
    $(".second-menu").animate({ right: "-600px" }, 300, "easeInOutExpo");
  });

  $(".close-menu").click(function () {
    $(".second-menu").animate({ right: "-600px" }, 300, "easeInOutExpo");
    $("html").removeClass("disable-scroll");
    $(".second-menu-overlay").removeClass("show");
  });

  $(".second-menu-layout .second-menu-item > .arrow").click(function () {
    $(this).next("ul").slideToggle();
    $(this).parent().siblings().find("ul").slideUp();
  });


  //Search-form

  $(".search-btn").click(function () {
    $(".search-form-wrapper").addClass("show");
    $("html").addClass("disable-scroll");
  });

  $(".search-field").blur(function () {
    $(".search-form-wrapper").removeClass("show");
    $("html").removeClass("disable-scroll");
  });

  $(".close-btn").click(function () {
    $(".search-form-wrapper").removeClass("show");
    $("html").removeClass("disable-scroll");
  });

  //Resize

  
    var sizeWidth = $(window).width()
     if (sizeWidth) {
       var contentBG = $('.bg-content')
       contentBG.css('left',  (sizeWidth - 1900)/2 + 'px')
     }

     if (sizeWidth <= 1200) {
      var contentBG = $('.bg-content')
      contentBG.css('left',  (sizeWidth - 1900)/3 + 'px')
    }



});
