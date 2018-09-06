$(document).ready(function () {
    // 弹出联系我们
    $(function () {
        $('.our-contacts').hide();
    })
    $('.contactUs').click(function () {
        $('.our-contacts').slideToggle(300);
        setTimeout(() => {
            $('.bottomBtn').trigger('click')
        }, 200);
    })
})
