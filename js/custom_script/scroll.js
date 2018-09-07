$(document).ready(function () {

    jQuery(document).ready(function ($) {

        //默认滚动在最上面
        setTimeout(() => {
            $('body,html').animate({scrollTop: 0},0,function(){
                window.location.hash = 1;
            })
        }, 1000);
        


        // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = 300,
            //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
            offset_opacity = 1200,
            //duration of the top scrolling animation (in ms)
            scroll_top_duration = 700,
            //grab the "back to top" link
            $back_to_top = $('.topBtn');
        $back_to_bottom = $('.bottomBtn');

        //smooth scroll to top
        $back_to_top.on('click', function (event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration
            );
        });

        $back_to_bottom.on('click', function (event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $(document).height() - $(window).height(),
            }, scroll_top_duration
            );
        });

    });

    function maskMatch() {
        $("section").each(function (index) {

            $(this).children('div').css({ "padding": 0 });

            $(this).children('div').css({ "padding-bottom": $(window).height() - $(this).children('div').height() -200 });

            $(this).children('div').css({ "padding-top": 200 });
        })
    }

    maskMatch();

    // setTimeout(() => {
    // 	maskMatch();
    // }, 2000);

    $('#contact').children('div').resize(function () {
        maskMatch();
    })

    $(window).resize(function () {
        maskMatch();
    })

    $.scrollify({
        section: "section"
    });




    $(window).scroll(function () {


        var winTop = $(window).scrollTop();
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });

        if (window.innerWidth < 600) {

            $('.stuckMenu').next().closest('div').css({
                'margin-top': 6 + 'rem'
            }, 10);

        } else {
            if (winTop < 20) {
                $('.stuckMenu').next().closest('div').css({
                    'margin-top': 0 + 'rem'
                }, 10);
                $('.stuckMenu').css("margin-top", " 20px");
                $('.navbar .container').css("background", " rgba(0,0,0,0.5)");
                $('.stuckMenu').css("background", " transparent");
            }
        }


    });


    if (window.innerWidth < 600) {
        // $('.stuckMenu').css("height", "6rem");
        $('.stuckMenu').css("position", "fixed");
        $('.stuckMenu').css("background", " rgba(0,0,0,0.5)");
        $('.stuckMenu').css("margin-top", " 0px");
        $('.navbar .container').css("background", " transparent");
        $('.isStuck').css({
            top: '0px'
        }, 10, function () {

        });

        $('.stuckMenu').next().closest('div').css({
            'margin-top': 6 + 'rem'
        }, 10);
    }

    $(window).resize(function () {
        if (window.innerWidth < 600) {
            $('.stuckMenu').css("position", "fixed");
            $('.stuckMenu').css("background", " rgba(0,0,0,0.5)");
            $('.stuckMenu').css("margin-top", " 0px");
            $('.navbar .container').css("background", " transparent");
            $('.isStuck').css({
                top: '0px'
            }, 10, function () {

            });

            $('.stuckMenu').next().closest('div').css({
                'margin-top': 6 + 'rem'
            }, 10);
        } else {
            $('.stuckMenu').next().closest('div').css({
                'margin-top': 0 + 'rem'
            }, 10);
            $('.stuckMenu').css("margin-top", " 20px");
            $('.navbar .container').css("background", " rgba(0,0,0,0.5)");
            $('.stuckMenu').css("background", " transparent");
        }
    });

    $('.navbar-header').css('text-shadow', ' 1px 1px 5px #000000');
    
})