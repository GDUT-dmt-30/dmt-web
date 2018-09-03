$(document).ready(function () {

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
            document.getElementById("txtHint").innerHTML = result;
        }
    }

    xmlhttp.open("GET", "php/view.php", true);

    xmlhttp.send();

    function sendMessage(str) {



        // function $(id){ return document.getElementById(id);}
        if (str == "") {
            document.getElementById("txtHint").innerHTML = "";
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
                document.getElementById("txtHint").innerHTML = result;
            }
        }
        let nickname = $(".nickname").val();
        let text = $(".textarea").val();
        let message = "php/server.php?" + "user=" + nickname + "&comment=" + text;
        xmlhttp.open("GET", message, true);

        xmlhttp.send();
    }

    $(".gt-btn").click(function () {

        sendMessage();

    });


});
