document.addEventListener('DOMContentLoaded', () => {
    let headerMenu = document.querySelector('.header__menu');
    document.addEventListener('click', ({ target }) => {
        // burger
        if (target.classList.contains('burger')) {
            target.classList.toggle('_opened');
            headerMenu.classList.toggle('active');
        }
    });

});

window.onload = () => {
    // $.fn.setCursorPosition = function(pos) {
    //     if ($(this).get(0).setSelectionRange) {
    //         $(this).get(0).setSelectionRange(pos, pos)
    //     } else if ($(this).get(0).createTextRange) {
    //         var range = $(this).get(0).createTextRange()
    //         range.collapse(true)
    //         range.moveEnd('character', pos)
    //         range.moveStart('character', pos)
    //         range.select()
    //     }
    // }
    // $('input[type="tel"]').on('click', function() {
    //     $(this).setCursorPosition(3)
    // }).mask('+7 (999) 999 99 99')

    // $('.way').waypoint({
    //     handler: function() {
    //         $(this.element).addClass("way--active");

    //     },
    //     offset: '88%'
    // });
    $('.hero__content').slick({
        autoplay: false,
        // adaptiveHeight: true,
        speed: 800,
        slidesToShow: 1,
        fade: true,
        prevArrow: $('.hero__arrow.prev'),
        nextArrow: $('.hero__arrow.next'),
        asNavFor: '.hero__images',
        responsive: [{
            breakpoint: 992,
            settings: {
                adaptiveHeight: true,
            }
        }]
    });


    $('.hero__images').slick({
        autoplay: false,
        slidesToShow: 1,
        speed: 800,
        fade: true,
        arrows: false,
        dots: false,
        asNavFor: '.hero__content',
    });


    $('.architecture__slider').slick({
        slidesToShow: 1,
        prevArrow: $('.architecture__arrow.prev'),
        nextArrow: $('.architecture__arrow.next')
    });


    //////////////////////////////////////

    $('.tabs__img-slider').slick({
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        asNavFor: '.layouts-slider__slider',
        adaptiveWidth: true,
    });


    $('.layouts-slider__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.tabs__img-slider',
        dots: false,
        prevArrow: $('.layouts-slider__arrow.prev'),
        nextArrow: $('.layouts-slider__arrow.next'),
        // centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1650,
                settings: {
                    adaptiveHeight: true,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 856,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    const sliderTabs = () => {
        const tabBtnsWrap = document.querySelector('.tabs__btns');
        const tabBtns = document.querySelectorAll('.tabs__btn');

        const removeClassActive = () => {
            tabBtns.forEach(btn => btn.classList.remove('tabs__btn--active'));
        };


        const showSlides = (value) => {
            $('.tabs__img-slider').slick('slickUnfilter');
            $('.tabs__img-slider').slick('slickFilter', `[data-room="${value}"]`);

            $('.layouts-slider__slider').slick('slickUnfilter');
            $('.layouts-slider__slider').slick('slickFilter', `[data-room="${value}"]`);
        };


        tabBtnsWrap.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__btn')) {
                removeClassActive();
                showSlides(e.target.dataset.room);

                e.target.classList.add('tabs__btn--active');
            }
        });


        showSlides(1);
    };


    sliderTabs();
};



// loader func
function submitForm() {
    $('#form_loader').show();
}
//Alert form
let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close")
for (let item of alertClose) {
    item.addEventListener('click', function (event) {
        alertt.classList.remove("alert--active")
        alertt.classList.remove("alert--warning")
        alertt.classList.remove("alert--error")
    })
}

