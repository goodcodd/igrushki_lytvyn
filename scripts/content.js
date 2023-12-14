$(document).ready(function () {
    const slidesPerView = 3;

    const slider = $('.list-goods-slider').slick({
        infinite: true,
        slidesToShow: slidesPerView,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.prev2').on('click', function (e) {
        e.preventDefault();
        slider.slick('slickPrev');
    });

    $('.next2').on('click', function (e) {
        e.preventDefault();
        slider.slick('slickNext');
    });

    slider.on('afterChange', function (event, slick, currentSlide) {
        updateCardStyle(currentSlide);
    });
});

function updateCardStyle(index) {
    $('.good').removeClass('active');
    $('.good[data-slick-index="' + index + '"]').addClass('active');
}
