

$(document).ready(function () {
    // 发弹幕相关的动态效果
    let quttonUpload_clickCheck = true;
    let quttonSetting_clickCheck = true;
    var quttonUpload = Qutton.getInstance($('#qutton_upload'));

    $('#qutton_upload').css('border-radius', '50%')
    $('#qutton_setting').css('border-radius', '50%')

    quttonUpload.init({
        width: $('.gooey-menu-item').css('width'),
        height: $('.gooey-menu-item').css('height'),
        backgroundColor: "#4094c7",
        clickCallback: function () {

            if (quttonUpload_clickCheck) {
                quttonUpload_clickCheck = false;

                $('#setPos').css({
                    "position": "absolute",
                    "padding": "0px 15rem",
                    "left": "-15rem"
                });

                $("#setPos").velocity({
                    left: "-43.5rem"
                }, { duration: 100 });

                $('#qutton_upload').append("<style>.fa-keyboard-o:before {display: none;}</style>")


            }

        },
        closeCallback: function () {
            quttonUpload_clickCheck = true;
            $('#qutton_upload').children('style').remove();
            $('#qutton_upload').append("<style>.fa-keyboard-o:before {display: block;}</style>")

            $('#qutton_upload').css({
                width: $('.gooey-menu-item').css('width'),
                height: $('.gooey-menu-item').css('height'),
            })

            $("#setPos").velocity({
                left: "-15rem"
            }, {
                    delay: 300,
                    duration: 100
                });
        }

    });

    var quttonSetting = Qutton.getInstance($('#qutton_setting'));

    quttonSetting.init({
        width: $('.gooey-menu-item').css('width'),
        height: $('.gooey-menu-item').css('height'),
        backgroundColor: "#4094c7",
        clickCallback: function () {

            if (quttonSetting_clickCheck) {
                quttonSetting_clickCheck = false;

                $('#setPos_setting').css({
                    position: "absolute",
                    padding: "0px 15rem",
                    left: "-15rem",
                    top: "0rem"
                });

                $("#setPos_setting").velocity({
                    left: "-41.5rem",
                    top: "-4.5rem"
                }, {
                        duration: 100,

                    });


                $('#qutton_setting').append("<style>.fa-cog:before {display: none;}</style>")

            }

        },
        closeCallback: function () {
            quttonSetting_clickCheck = true;
            $('#qutton_setting').children('style').remove();
            $('#qutton_setting').append("<style>.fa-cog:before {display: block;}</style>")

            $('#qutton_setting').css({
                width: $('.gooey-menu-item').css('width'),
                height: $('.gooey-menu-item').css('height'),
            })

            $("#setPos_setting").velocity({
                left: "-15rem",
                top: "0rem"
            }, {
                    delay: 300,
                    duration: 100,

                });

            $('#qutton_setting').append("<style>.fa-cog:before {display: block;}</style>")
        }

    });


    //弹幕逻辑

    //初始化弹幕
    $("#danmu").danmu({
        height: window.innerHeight,  //弹幕区高度
        width: window.innerWidth,   //弹幕区宽度
        zindex :300,   //弹幕区域z-index属性
        speed:7000,      //滚动弹幕的默认速度，这是数值值得是弹幕滚过每672像素所需要的时间（毫秒）
        sumTime:65535,   //弹幕流的总时间
        danmuLoop:false,   //是否循环播放弹幕
        defaultFontColor:"#FFFFFF",   //弹幕的默认颜色
        fontSizeSmall:16,     //小弹幕的字号大小
        FontSizeBig:24,       //大弹幕的字号大小
        opacity:"1",			//默认弹幕透明度
        topBottonDanmuTime:6000,   // 顶部底部弹幕持续时间（毫秒）
        SubtitleProtection:false,     //是否字幕保护
        positionOptimize:false,         //是否位置优化，位置优化是指像AB站那样弹幕主要漂浮于区域上半部分
        
        maxCountInScreen: 40,   //屏幕上的最大的显示弹幕数目,弹幕数量过多时,优先加载最新的。
        maxCountPerSec: 10      //每分秒钟最多的弹幕数目,弹幕数量过多时,优先加载最新的。
    });

    
    
    
    // 样式调整
    $('#danmu').css({
        "pointer-events": "none",
        overflow:"hidden",
        position:"fixed",
        "top":$('.navbar-wrapper').css('height'),
        height: window.innerHeight - parseInt($('.navbar-wrapper').css('height'))
        //让弹幕不会盖住导航栏
    })

    $(window).resize(function(){
        $('#danmu').css({
            height: window.innerHeight - parseInt($('.navbar-wrapper').css('height'))
        }) 
    })

    let danmuInitcheck = true;
    let danmuToggle = false;
    $('#danmuShow').click(function(){

        if(danmuInitcheck){
            danmuInitcheck = false;
            $('#danmuShow').removeClass('fa-eye-slash');
            $('#danmuShow').addClass('fa-eye');
            $('#danmu').danmu('danmuStart');
        }else if(danmuToggle){
            danmuToggle = false;
            $('#danmuShow').removeClass('fa-eye-slash');
            $('#danmuShow').addClass('fa-eye');
            $('#danmu').css('display','block');
        }else{
            danmuToggle = true;
            $('#danmuShow').removeClass('fa-eye');
            $('#danmuShow').addClass('fa-eye-slash');
            $('#danmu').css('display','none');
        }
        
    })
    
    
    // 调整透明度
    $('.srs-bubble').on('DOMNodeInserted',function(){
        let opacity = parseInt($('.srs-bubble').html().replace(/[^0-9]/ig,""))/100;
        console.log(opacity);
        $('#danmu').data("opacity",opacity);
    })
    
    //点击发送弹幕
    $('#button_basic_upload').click(function(){
        var text = document.getElementById('fileUrl').value;
        var color = $('.sp-preview-inner').css('background-color');
        var position = document.getElementById('position').value;
        var time = $('#danmu').data("nowTime")+1;
        var size = 1;
        var text_obj='{ "text":"'+text+'","color":"'+color+'","size":"'+size+'","position":"'+position+'","time":'+time+'}';
        $.post("php/danmu/stone.php",{danmu:text_obj});
        // var text_obj='{ "text":"'+text+'","color":"'+color+'","size":"'+size+'","position":"'+position+'","time":'+time+',"isnew":""}';
        var new_obj=eval('('+text_obj+')');

        $('#danmu').danmu("addDanmu",new_obj);
        document.getElementById('fileUrl').value='';
    })

    // //测试弹幕
    // $("#danmu").danmu("addDanmu",[
    //     { text:"这是滚动弹幕" ,color:"white",size:1,position:0,time:2}
    //     ,{ text:"这是顶部弹幕" ,color:"yellow" ,size:1,position:1,time:2}
    //     ,{ text:"这是底部弹幕" , color:"red" ,size:1,position:2,time:2}
    //   ]);

    // 从后台获取弹幕
    $.get("php/danmu/query.php", function (data) {
        // console.log(data)
        var danmu_from_sql = eval(data);
        for (var i = 0; i < danmu_from_sql.length; i++) {
            var danmu_ls = eval('(' + danmu_from_sql[i] + ')');
            $('#danmu').danmu("addDanmu", danmu_ls);
        }
    });

})
