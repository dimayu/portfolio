(function ($) {
    $(document).ready(function () {

        new fullpage('#fullpage', {
            autoScrolling: true,
            navigation: true,
            fadingEffect: true,
            showActiveTooltip: true,
            navigationTooltips: ['Главная', 'Обо мне', 'Мой стек', 'Мои работы', 'Контакты'],
            verticalCentered: true,
            credits: false,
            scrollingSpeed: 900
        });

        var tl = gsap.timeline({defaults: {duration: .5, ease: "power2.in"}});
        tl.from('.logo', {
            opacity: 0,
            y: 0
        })
            .from('.line-one', {
                opacity: 0,
                y: 30
            })
            .from('.line-two', {
                opacity: 0,
                y: -30
            })
            .from('.line-tree', {
                opacity: 0,
                y: 30
            })
            .from('.social-links__item-1', {
                opacity: 0,
                y: 30
            })
            .from('.social-links__item-2', {
                opacity: 0,
                y: 30
            })
            .from('.social-links__item-3', {
                opacity: 0,
                y: 30
            })
            .from('.social-links__item-4', {
                opacity: 0,
                y: 30
            })
            .from('.border', {
                height: 0
            })
            .from('h1', {
                scaleY: 0,
                y: "100%"
            })
    });
})(jQuery);