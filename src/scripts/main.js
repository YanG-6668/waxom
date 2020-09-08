$(function() {
    
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });
    

    $('.menu__btn').on("click", function() {
        $('.header__top-menu-list').slideToggle();
    });


    $('.slider').slick({
        dots: true,
        fade: true,
        autoplay: 5000,
        arrows: false,
    });

    $('.post__item-slider-img').slick({
        dots: true,
        fade: true,
        autoplay: 5000,
        arrows: false,
    });
    
    $('.post__items').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]

    });

    var mixer = mixitup('.project__inner-box');

});
