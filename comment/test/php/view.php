<?php
require_once 'connect.php';

$conn = connect();
$result = $conn->query('select*from comments');

echo $result->num_rows . " ";
for ($i = 0; $i < $result->num_rows; $i++) {
    $result_arr = $result->fetch_assoc(); //读取
    $_name = $result_arr['user'];
    $_comment = $result_arr['comment'];
    $_addtime = $result_arr['addtime'];


    echo "<div class='gt-comments'>";
    echo     "<div style='position: relative;'>";
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

    // echo $_name . ' - ' . $_comment . ':';
    // echo $_addtime . '  <br>';
}
