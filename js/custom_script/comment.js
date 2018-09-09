$(document).ready(function () {
    var Page = (function () {

        var config = {
            $bookBlock: $('#bb-bookblock'),
            $navNext: $('#bb-nav-next'),
            $navPrev: $('#bb-nav-prev'),
            $navFirst: $('#bb-nav-first'),
            $navLast: $('#bb-nav-last')
        },
            init = function () {
                config.$bookBlock.bookblock({
                    speed: 1000,
                    shadowSides: 0.8,
                    shadowFlip: 0.4
                });
                initEvents();
            },
            initEvents = function () {

                var $slides = config.$bookBlock.children();

                // add navigation events
                config.$navNext.on('click touchstart', function () {
                    config.$bookBlock.bookblock('next');
                    return false;
                });

                config.$navPrev.on('click touchstart', function () {
                    config.$bookBlock.bookblock('prev');
                    return false;
                });

                config.$navFirst.on('click touchstart', function () {
                    config.$bookBlock.bookblock('first');
                    return false;
                });

                config.$navLast.on('click touchstart', function () {
                    config.$bookBlock.bookblock('last');
                    return false;
                });

                // add swipe events
                $slides.on({
                    'swipeleft': function (event) {
                        config.$bookBlock.bookblock('next');
                        return false;
                    },
                    'swiperight': function (event) {
                        config.$bookBlock.bookblock('prev');
                        return false;
                    }
                });

                // add keyboard events
                $(document).keydown(function (e) {
                    var keyCode = e.keyCode || e.which,
                        arrow = {
                            left: 37,
                            up: 38,
                            right: 39,
                            down: 40
                        };

                    switch (keyCode) {
                        case arrow.left:
                            config.$bookBlock.bookblock('prev');
                            break;
                        case arrow.right:
                            config.$bookBlock.bookblock('next');
                            break;
                    }
                });
            };

        return { init: init };

    })();

    if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var words = xmlhttp.responseText.split(' ');
            let result = "";

            for (let i = 1; i < words.length; i++) {
                result = result + " " + words[i];
            }

            document.getElementById("num").innerHTML = words[0];
            document.getElementById("bb-bookblock").innerHTML = result;
            document.getElementById('userName').value='';
            document.getElementById('txt').value='';
            Page.init();
        }
    }

    xmlhttp.open("GET", "/php/comment/view.php", true);

    xmlhttp.send();

    function sendMessage(str) {



        // function $(id){ return document.getElementById(id);}
        if (str == "") {
            document.getElementById("bb-bookblock").innerHTML = "";
            return;
        }
        if (window.XMLHttpRequest) {
            // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp = new XMLHttpRequest();
        }
        else {
            // IE6, IE5 浏览器执行代码
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                var words = xmlhttp.responseText.split(' ');
                let result = "";

                for (let i = 1; i < words.length; i++) {
                    result = result + " " + words[i];
                }
                console.log(xmlhttp.responseText);
                document.getElementById("num").innerHTML = words[0];
                document.getElementById("bb-bookblock").innerHTML = result;
                document.getElementById('userName').value='';
                document.getElementById('txt').value='';
                Page.init();
            }
        }
        let nickname = $(".nickname").val();
        let text = $(".textarea").val();
        let message = "/php/comment/server.php?" + "user=" + nickname + "&comment=" + text;
        xmlhttp.open("GET", message, true);

        xmlhttp.send();
    }

    $(".gt-btn").click(function () {

        sendMessage();

    });


    

});
