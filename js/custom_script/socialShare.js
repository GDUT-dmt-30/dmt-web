$(document).ready(function () {
    //打开分享页面
    var closeFn;
    function closeShowingctaModal() {
        var showingctaModal = document.querySelector('.ctaModal.show');
        if (!showingctaModal) return;
        showingctaModal.classList.remove('show');
        document.body.classList.remove('disable-mouse');
        document.body.classList.remove('disable-scroll');
        if (closeFn) {

            closeFn();
            closeFn = null;
        }
    }
    document.addEventListener('click', function (e) {
        var target = e.target;
        if (target.dataset.ctaTarget) {
            $('body').css('overflow', 'hidden');
            $('.navbar-wrapper').css('display', 'none');
            closeFn = cta(target, document.querySelector(target.dataset.ctaTarget), { relativeToWindow: true }, function showctaModal(ctaModal) {
                ctaModal.classList.add('show');
                document.body.classList.add('disable-mouse');
                if (target.dataset.disableScroll) {
                    document.body.classList.add('disable-scroll');
                }
            });
        }
        else if (target.classList.contains('ctaModal-close-btn')) {
            $('body').css('overflow', 'visible');
            $('.navbar-wrapper').css('display', 'block');
            closeShowingctaModal();
        }
    });
    document.addEventListener('keyup', function (e) {
        if (e.which === 27) {
            $('body').css('overflow', 'visible');
            $('.navbar-wrapper').css('display', 'block');
            closeShowingctaModal();

        }
    })

    // 复制网址
    new ClipboardJS('.icon-heart');
    new ClipboardJS('.icon-wechat');
    $('#shareCopy').toggle();
    $('.icon-heart').attr('data-clipboard-text', window.location.href)
    $('.icon-wechat').attr('data-clipboard-text', window.location.href)
    $('.icon-heart').click(function () {
        $('#shareCopy').fadeIn();

        setTimeout(() => {
            $('#shareCopy').fadeOut();
        }, 2000);

    })
    $('.icon-wechat').click(function () {
        $('.icon-heart').trigger('click');
    })
})