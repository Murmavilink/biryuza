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
};

// loader func
function submitForm() {
    $('#form_loader').show();
}
//Alert form
let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close")
for (let item of alertClose) {
    item.addEventListener('click', function(event) {
        alertt.classList.remove("alert--active")
        alertt.classList.remove("alert--warning")
        alertt.classList.remove("alert--error")
    })
}



const tabs = () => {
    const tabBtns = document.querySelectorAll('.tabs__btn');
    const tabContents = document.querySelectorAll('.tabs__content');


    const removeClassActive = (items, itemActiveClass, contents, contentActiveClass) => {
        for (let i = 0; i < contents.length; i++) {
            items[i].classList.remove(itemActiveClass);
    
            contents[i].classList.remove(contentActiveClass);
        }
    };

    
    const addClassActive = (btn, proporty, activeClass, contentActiveClass) => {
        const dataContentId = btn.dataset[proporty];
        const content = document.querySelector(`[data-content="${dataContentId}"]`);

        btn.classList.add(activeClass);
        content.classList.add(contentActiveClass);
    };


    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            removeClassActive(tabBtns, 'tabs__btn--active', tabContents, 'tabs__content--active');
            addClassActive(btn, 'tab', 'tabs__btn--active', 'tabs__content--active');
        });
    });

};

tabs();