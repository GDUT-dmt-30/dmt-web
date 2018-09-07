$(document).ready(function () {
    jQuery(function ($) {
        $(document).ready(function () {
            //enabling stickUp on the '.navbar-wrapper' class
            $('.navbar-wrapper').stickUp({
                parts: {
                    0: 'banner',
                    1: 'aboutus',
                    2: 'skillset',
                    3: 'experience',
                    4: 'education',
                    5: 'ourwork',
                    6: 'contact'
                },
                itemClass: 'menuItem',
                itemHover: 'active',
                topMargin: 'auto'
            });
        });


    });

    $(document).ready(function () {
        // Add smooth scrolling to all links in navbar + footer link
        $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        });
    })
})