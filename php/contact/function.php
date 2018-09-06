<?php
    require_once'config.php';
    function connectDb(){
        $conn = new mysqli(MYSQL_HOST,MYSQL_USER,MYSQL_PW,MYSQL_DATABASE);
        if(!$conn){
            die("Can't connect server!" );
        }
        return $conn;
    }
