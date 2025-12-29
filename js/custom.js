$("#Header").load("layout/header.html");
$("#Footer").load("layout/footer.html");

$(window).on('load', function () {
    var str = location.pathname.toLowerCase();
    $("#menu li a").each(function () {
        var thisHref = $(this).attr("href").toLowerCase();
        if (str.includes(thisHref)) {
            $("#menu li a.active").removeClass("active");
            $(this).addClass("active");
        }
    });
});

// blogslider start
$('.blogs').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
        }
    }
    ]
});

// blogslider end


// wow animation js 

$(function () {
    new WOW().init();
});


// responsive menu js 

$(function () {
    $('#menu').slicknav();
});


// reviwSlider start

$('.reviwSlider').slick({
    speed: 300,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [{
        breakpoint: 1199,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
    ]
});

// reviwSlider end