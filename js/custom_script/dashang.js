$(document).ready(function () {
    // 打赏代码
    $(".pay_item").click(function () {
        $(this).addClass('checked').siblings('.pay_item').removeClass('checked');
        var dataid = $(this).attr('data-id');
        $(".shang_payimg img").attr("src", "/img/" + dataid + "img.jpg");
        if (dataid == "alipay")
            $(".shang_payimg").css("border-color", "#4094c7");
        else
            $(".shang_payimg").css("border-color", "#22aa3b");
        $("#shang_pay_txt").text(dataid == "alipay" ? "支付宝" : "微信");
    });
    function dashangToggle() {

        $(".hide_box").fadeToggle();
        $(".shang_box").fadeToggle();

    }
})
