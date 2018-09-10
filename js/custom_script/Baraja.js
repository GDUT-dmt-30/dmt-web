$(function() {
  $(document).ready(function() {
    var $el = $("#baraja-el"),
      baraja = $el.baraja();

    // 数据添加
    let addItem = `
							
    <li>
        <img src="/images/user/lei.jpg" width="160" height="160" />
        <h4>酆仙深</h4>
        <p>2016级2班</p >
        <br>
        <p>贡献：后台</p >
        <br>
        <p>方向：后端</p >
    </li>

    <li>
        <img src="/images/user/li.jpg" width="160" height="160" />
        <h4>李meme薇</h4>
        <p>2016级1班</p >
        <br>
        <p>贡献：前端架构搭建</p >
        <br>
        <p>方向：前端</p >
    </li>

    <li>
        <img src="/images/user/tan.jpg" width="160" height="160" />
        <h4>Niccce</h4>
        <p>2016级2班</p >
        <br>
        <p>贡献：前端架构搭建</p >
        <br>
        <p>方向：前端</p >
    </li>

    <li>
        <img src="/images/user/lai.jpg" width="160" height="160" >
        <h4>· Zaychik</h4>
        <p>2016级2班</p >
        <br>
        <p>贡献：Unity作品&学习文章</p >
        <br>
        <p>方向：Unity</p >
    </li>

    <li>
        <img src="/images/user/peng.jpg" width="160" height="160" />
        <h4>JasonPang</h4>
        <p>2016级2班</p >
        <br>
        <p>贡献：前端架构搭建</p >
        <br>
        <p>方向：前端&小程序</p >
    </li>

    <li>
        <img src="/images/user/jie.jpg" width="160" height="160" />
        <h4>JIE</h4>
        <p>2017级1班</p >
        <br>
        <p>贡献：特效学习文章</p >
        <br>
        <p>方向：特效</p >
    </li>

    <!-- 腾出最后的卡片避免被覆盖看不到 -->
    <li>
        <img src="/images/user/dmt.jpg" width="160" height="160" >
        <h4>数字媒体技术</h4>
        <p>Digital Media Technology</p>
        <br>
        <p>&copy;2016级</p>
        <br>
        <p></p>
    </li>

    `;

    baraja.add($(addItem));

    baraja = $el.baraja();

    let baraja_click = true;
    $("#baraja-el").on("click", function(event) {
      event.stopPropagation();

      // 动态腾出空间
      if (baraja_click) {
        baraja_click = false;
        $(".baraja-container").velocity(
          {
            "margin-bottom": "25rem"
          },
          300,
          "swing"
        );
      } else {
        baraja_click = true;
        $(".baraja-container").velocity(
          {
            "margin-bottom": "1rem"
          },
          600,
          "swing"
        );
      }
    });

    // 点击按钮自动旋转卡片
    $("#collapseContainer").on("shown.bs.collapse", function() {
      baraja_click = false;
      $(".baraja-container").velocity(
        {
          "margin-bottom": "25rem"
        },
        300,
        "swing"
      );
      baraja.fan({
        speed: 500,
        easing: "ease-out",
        range: 360,
        direction: "left",
        origin: { x: 50, y: 90 },
        center: false
      });
    });

    // 点击按钮重置卡片
    $("#collapseContainer").on("hidden.bs.collapse", function() {
      baraja = $el.baraja();
    });

    // 点击空白区域收回卡片
    $(document).click(function() {
      baraja.close();
      baraja_click = true;
      $(".baraja-container").velocity(
        {
          "margin-bottom": "1rem"
        },
        600,
        "swing"
      );
    });

    // 滚动鼠标翻卡片
    $("#baraja-el").mousewheel(function(event) {
      if (event.deltaY == 1) {
        baraja.previous();
      } else if (event.deltaY == -1) {
        baraja.next();
      }
      baraja_click = true;
      $(".baraja-container").velocity(
        {
          "margin-bottom": "1rem"
        },
        600,
        "swing"
      );

      return false;
    });
  });
});
