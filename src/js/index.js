(function ($) {
    $(document).ready(function () {

        $(window).on('load', function() {
            $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
            $('body').delay(3550).css({'overflow':'visible'});
        });

        $('#fullpage').pagepiling({
            menu: null,
            direction: 'vertical',
            verticalCentered: true,
            sectionsColor: [],
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage'],
            scrollingSpeed: 700,
            easing: 'swing',
            loopBottom: false,
            loopTop: false,
            css3: true,
            navigation: {
                'textColor': '#fff',
                'bulletsColor': '#e07f14',
                'position': 'right',
                'tooltips': ['Главная', 'О себе', 'Стек', 'Мои работы', 'Контакты']
            },
            normalScrollElements: null,
            normalScrollElementTouchThreshold: 5,
            touchSensitivity: 5,
            keyboardScrolling: true,
            sectionSelector: '.section',
            animateAnchor: false,

            //events
            onLeave: function (index, nextIndex, direction) {
            },
            afterLoad: function (anchorLink, index) {
            },
            afterRender: function () {
            },
            afterLoad: function (anchorLink, index) {

                //using anchorLink
                if (anchorLink == 'firstPage') {
                    sectionOne.restart();
                }

                if (anchorLink == 'secondPage') {
                    sectionTwo.restart();
                    $("h2").toggleClass("active");
                }

                if (anchorLink == 'thirdPage') {
                    sectionTree.restart();
                }
            }
        });

        let tl = gsap.timeline({defaults: {duration: .3, ease: "bounce.out"}});
        let sectionOne = gsap.timeline({defaults: {duration: .3, ease: "bounce.out"}});
        let sectionTwo = gsap.timeline({defaults: {duration: .3, ease: "bounce.out"}});
        let sectionTree = gsap.timeline({defaults: {duration: .1, ease: "power2.out"}});
        let sectionFour = gsap.timeline({defaults: {duration: .1, ease: "power2.out"}});
        tl.from('.line-one', {
            opacity: 0,
            y: 30
        });
        tl.from('.line-two', {
            opacity: 0,
            y: -30
        });
        tl.from('.line-tree', {
            opacity: 0,
            y: 30
        });
        tl.from('.social-links__item-1', {
            opacity: 0,
            y: 30
        });
        tl.from('.social-links__item-2', {
            opacity: 0,
            y: 30
        });
        tl.from('.social-links__item-3', {
            opacity: 0,
            y: 30
        });
        tl.from('.social-links__item-4', {
            opacity: 0,
            y: 30
        });
        tl.from('.social-links__item-5', {
            opacity: 0,
            y: 30
        });
        tl.from('.border', {
            height: 0
        });

        sectionOne.from('h1', {
            scaleY: 0,
            y: "100%",
            toggleClass: "active",
        });
        sectionOne.from('h2', {
            toggleClass: "active",
        });
        sectionOne.from('.section__items__item--photo img', {
            scale: 0.5,
            autoAlpha: 0
        });

        sectionTwo.to(".text", {
            duration: 4,
            text: "5 лет работаю HTML верстальщиком<br>" +
                "Глубоко изучаю frontend, " +
                "выполнил много работ по " +
                "интеграции верстки на CMS WP и Joomla.<br>" +
                "<p>Ценю в людях честность, открытость и серьезное отношение к делу.</p>"
        });

        sectionTree.to(".stack__percent--1", 1, {
            width: "90%"
        });

        sectionTree.to(".stack__percent--2", 1, {
            width: "90%"
        });
        sectionTree.to(".stack__percent--3", 1, {
            width: "75%"
        });
        sectionTree.to(".stack__percent--4", 1, {
            width: "70%"
        });
        sectionTree.to(".stack__percent--5", 1, {
            width: "65%"
        });
        sectionTree.to(".stack__percent--6", 1, {
            width: "50%"
        });
        sectionTree.to(".stack__percent--7", 1, {
            width: "50%"
        });
        sectionTree.to(".stack__percent--8", 1, {
            width: "60%"
        });
        sectionTree.to(".stack__percent--9", 1, {
            width: "55%"
        });

        sectionFour.from(".portfolio__items", {

        });


    });
})(jQuery);