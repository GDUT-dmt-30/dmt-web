$(document).ready(function () {

    $('section').find('.funnyNewsTicker').each(function (index) {
        $(this).attr("id","funnyNewsTicker"+index);
        $("#funnyNewsTicker" + index).funnyNewsTicker({
            width: "100%",
            timer: 2000,
            titlecolor: "#FFF",
            itembgcolor: "#1faf6d",
            infobgcolor: "#1a935c",
            buttonstyle: "white",
            bordercolor: "#1a935c",
            btnfacebook: false,
            btntwitter: false,
            btngoogleplus: false,
            btnlinkbutton: false,
            pagenavi: true,
            // pagenavistyle: "white",
            // autoplay: false,
        });

        $("#funnyNewsTicker" + index).mousewheel(function (event) {
            if (event.deltaY == 1) {
                $('.fnt-top-arrow').trigger('click');
            } else if (event.deltaY == -1) {
                $('.fnt-bottom-arrow').trigger('click');
            }
            return false;
        });

    });

});