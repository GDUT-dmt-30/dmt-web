$(function () {
    $(document).ready(function () {

        var $el = $('#baraja-el'),
            baraja = $el.baraja();

        // 数据添加
        let addItem = `
							
							<li>
								<img src="/images/user/lei.jpg" width="160" height="160" alt="image2" />
								<h4>酆仙深</h4>
								<p>2016级2班</p>
								<br>
								<p>贡献：后台系统对接</p>
								<br>
								<p>方向：后台</p>
							</li>
							
							<li>
								<img src="/images/user/lai.jpg" width="160" height="160" alt="image1">
								<h4>· Zaychik</h4>
								<p>2016级2班</p>
								<br>
								<p>贡献：Unity作品&学习文章</p>
								<br>
								<p>方向：Unity</p>
							</li>
							
							<!-- 腾出最后的卡片避免被覆盖看不到 -->
							<li>
								
							</li>
							
							`;

        baraja.add($(addItem));

        baraja = $el.baraja();

        let baraja_click = true;
        $('#baraja-el').on('click', function (event) {
            event.stopPropagation();

            // 动态腾出空间
            if (baraja_click) {
                baraja_click = false;
                $('.baraja-container').velocity({
                    "margin-bottom": "20rem"
                }, 300, "swing")

            } else {
                baraja_click = true;
                $('.baraja-container').velocity({
                    "margin-bottom": "1rem"
                }, 600, "swing")
            }

        });

        // 点击按钮自动旋转卡片
        $('#collapseContainer').on('shown.bs.collapse', function () {

            baraja_click = false;
            $('.baraja-container').velocity({
                "margin-bottom": "20rem"
            }, 300, "swing")
            baraja.fan({
                speed: 500,
                easing: 'ease-out',
                range: 360,
                direction: 'left',
                origin: { x: 50, y: 90 },
                center: false
            });
        })

        // 点击按钮重置卡片
        $('#collapseContainer').on('hidden.bs.collapse', function () {

            baraja = $el.baraja();

        })

        // 点击空白区域收回卡片
        $(document).click(function () {

            baraja.close();
            baraja_click = true;
            $('.baraja-container').velocity({
                "margin-bottom": "1rem"
            }, 600, "swing")

        });

        // 滚动鼠标翻卡片
        $('#baraja-el').mousewheel(function (event) {
            if (event.deltaY == 1) {
                baraja.previous();
            } else if (event.deltaY == -1) {
                baraja.next();
            }
            baraja_click = true;
            $('.baraja-container').velocity({
                "margin-bottom": "1rem"
            }, 600, "swing")

            return false;
        });

    });

})