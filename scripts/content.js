$(document).ready(function () {
    const slidesPerView = 3;

    const slider = $('.list-goods-slider').slick({
        infinite: true,
        slidesToShow: slidesPerView,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<a class="prev2 custom-button absolute left-20 bottom-2" href="#"><span class="button-text text-teal-500 bg-opacity-70 bg-teal-700 rounded-full px-4 py-2">❮</span></a>',
        nextArrow: '<a class="next2 custom-button absolute right-20 bottom-2" href="#"><span class="button-text text-teal-500 bg-opacity-70 bg-teal-700 rounded-full px-4 py-2">❯</span></a>',
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
