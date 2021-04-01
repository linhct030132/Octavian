var scrollToTop = document.querySelector('.scroll-to-top');

//Header-Scroll
window.onscroll = function () {

    var headerPosition = document.querySelector('.header');

    console.log(document.documentElement.scrollTop);

    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        headerPosition.style.backgroundColor = '#142333';
        scrollToTop.style.opacity = '1';
    }
    else {
        headerPosition.style.backgroundColor = 'transparent';
        scrollToTop.style.opacity = '0';
    }
};

function goToTop() {
    $('html, body').animate({scrollTop:0}, 'medium');
}

//Fade in
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".link").addClass("show-item");
    }
    
    if(scroll >= 300) {
        $(".title").addClass("show-item");
    }

    if (scroll >= 500 ) {
        $(".services-layout").addClass("show-item");
    }

    if (scroll >= 1100 ) {
        $(".social-layout").addClass("show-item");
    }

    if (scroll >= 1800 ) {
        $(".slide-client").addClass("show-item");
    }
});

//Scroll-spy

$(document).ready(function () {
    $(".nav-bar .home").on("click", function (e) {
        $('html, boy').animate({scrollTop: 0}, 200);
    });

    $(".nav-bar .service-link").on("click", function (e) {
        $('html, boy').animate({scrollTop: 900}, 200);
    });

    $(".nav-bar .social-link").on("click", function (e) {
        $('html, boy').animate({scrollTop: 1600}, 200);
    });

    $(".nav-bar .client-link").on("click", function (e) {
        $('html, boy').animate({scrollTop: 2300}, 200);
    });
});

//Slider

$('.client-layout').slick({
    rows: 2,
	dots: false,
	infinite: true,
    arrow: false,
    prevArrow: null,
    nextArrow: null,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 3500,
});
