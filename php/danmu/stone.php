<?php
require_once 'connect.php';

$conn = connect();
//if($conn){
//    echo "连接数据库成功";
//}

$danmu=$_POST['danmu'];

//设置时区，时间
date_default_timezone_set('Asia/shanghai');
$addtime = date('Y-m-d H:i:s');

$conn->query("INSERT INTO danmu(text,addtime) value('$danmu','$addtime')");
