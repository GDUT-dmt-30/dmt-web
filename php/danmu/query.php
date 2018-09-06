<?php
require_once 'connect.php';

$conn = connect();
//if($conn){
//    echo "连接数据库成功";
//}


$result = $conn->query("select*from danmu");

echo "[";
$first=0;
while($row = $result->fetch_assoc()){
	if ($first) {
		echo ",";
		
	}
$first=1;
echo "'".$row['text']."'";
}
	echo "]";
