<?php
define('MYSQL_HOST','39.108.237.9');
define('MYSQL_USER','fenglei');
define('MYSQL_PW','Feng123456!');

function connect(){
    $conn = new mysqli(MYSQL_HOST,MYSQL_USER,MYSQL_PW,'test_fl');
    $conn->query("set names utf8");
    if(!$conn){
        die("Can't connect server!".$conn->error );
    }

    return $conn;
}