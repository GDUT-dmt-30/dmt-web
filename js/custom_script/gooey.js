$(document).ready(function(){
    $("#gooey-upper").gooeymenu({
        bgColor: "#4094c7",
        contentColor: "white",
        style: "circle",
        circle: {
            radius: 45
        },
        margin: "medium",
        size: 50,
        bounce: true,
        bounceLength: "small",
        transitionStep: 100,
        hover: "#00a0e8",
        close: function () {//修正火狐浏览器 点击问题
            setTimeout(() => {
                $('.gooey-menu-item').css('display', 'none');
            }, 500);

        }
    });
    //修正火狐浏览器 点击问题
    $('.gooey-menu-item').css('display', 'none');
    $("#gooey-upper").click(function () {
        $('.gooey-menu-item').css('display', 'block');
    })

    $('#gooeySVG0').remove();
})