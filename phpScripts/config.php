<?php
   $host = "localhost";
   $user = "root";
   $password = "";
   $databaseName = "MasterAdmin";
   $con = new mysqli($host,$user,$password,$databaseName);
   if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
?>