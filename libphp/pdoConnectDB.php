<?php
    function pdoConnectDB(){
        $servername = "localhost";
        $username = "zhugar_ru";
        $password = "123";
        $dbname = "zhugar_ru";
        
        $conn = new PDO ("mysql:host=$servername;dbname=$dbname", $username, $password);
        return $conn;
    }
?>