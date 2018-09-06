<?php
require_once 'connect.php';

$conn = connect();
$result = $conn->query('select*from comments');

echo $result->num_rows . " ";
// echo "<div class='gt-comments'>";
for ($i = 0; $i < $result->num_rows; $i++) {
    $result_arr = $result->fetch_assoc(); //读取
    $_name = $result_arr['user'];
    $_comment = $result_arr['comment'];
    $_addtime = $result_arr['addtime'];

    if($i%5 == 0){
        echo    "<div class='bb-item'>";
    }
    
    echo         "<div class='gt-comment ' style='transform-origin: center top 0px;'>";
    echo             "<div class='gt-comment-content'>";
    echo                 "<div class='gt-comment-header' style='color:#5f3ef1'>" . $_name;
    echo                     "<span class='gt-comment-text'>发表于";
    echo                     "</span>";
    echo                     "<span class='gt-comment-date'>" . $_addtime;
    echo                     "</span>";
    echo                 "</div>";
    echo                 "<div class='gt-comment-body'>";
    echo                     "<p>" . $_comment . "</p>";
    echo                 "</div>";
    echo             "</div>";
    echo         "</div>";

    if($i%5 == 4){
        echo     "<div class='text-center' style='color:black;'> - " . ceil($i/5) . " - </div>";
        echo     "</div>";
    }
    
    if($i == $result->num_rows-1){
        echo     "<div class='text-center' style='color:black;bottom:5px;left: 47.5%;position:absolute;'> - " . ceil($i/5) . " - </div>";
        echo     "</div>";
    }


    // echo $_name . ' - ' . $_comment . ':';
    // echo $_addtime . '  <br>';
}
// echo  "</div>";