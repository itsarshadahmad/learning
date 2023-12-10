<?php

require("functions.php");
// require "router.php";

// Connect to database and execute a query
class Database {
    // 2:44:00
}

// Connect to MySQL database.
$dsn = "mysql:host=localhost;port=3306;dbname=myapp;user=root;charset=utf8mb4";
$pdo = new PDO($dsn); // PDO (PHP Data Object) is used for accessing database.

$statement = $pdo->prepare("SELECT * FROM posts");
$statement->execute();

$posts = $statement->fetchAll(PDO::FETCH_ASSOC); //FETCH_ASSOC remove duplicates in result from query

foreach ($posts as $post) {
    echo "<li>{$post['title']}</li>";
}
