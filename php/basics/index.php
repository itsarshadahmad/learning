<?php

/*

Best practices:


When writing only php in file then <?php is only required and doesn't need worry about closing.

To keep separation between php file and html file, best practice says put php code in index.php or single place and put other soft logic php logic (that is loops and conditional check) and html in other file like index.view.php or index.html.php to separate php and html code.


Start server (cmd: php -S localhost:PORT).
Then navigate to localhost:3000/index2.php to open file.


We can also create variables, functions, classes and use them or call them in html view file to keep php at single place and keep php minimal in view file.
*/


// We can also run php on cli using php filename.php to execute.
// cmd: php index.php

// echo "Enter Name: ";

// User input
// $name = readline("Enter your name: ");

// Printing in console
// print("Hi! " . $name . "");


$books = [
    [
        "name" => "Atomic Habits",
        "author" => "James Clear",
        "purchaseUrl" => "https://www.amazon.in",
        "releaseYear" => 2018
    ],
    [
        "name" => "The Power of your subconscious mind",
        "author" => "Joseph Murphy",
        "purchaseUrl" => "https://www.amazon.in",
        "releaseYear" => 1984
    ],
    [
        "name" => "Think & Grow Rich",
        "author" => "Napoleon Hill",
        "purchaseUrl" => "https://www.amazon.in",
        "releaseYear" => 1967
    ],
    [
        "name" => "The Martian",
        "author" => "Andy Weir",
        "purchaseUrl" => "https://www.amazon.in",
        "releaseYear" => 2011
    ]
];

function filterByAuthor($books, $author)
{
    $filteredBooks = [];
    foreach ($books as $book) {
        if ($book["author"] === $author) {
            $filteredBooks[] = $book; // Append item to filteredBook list
        }
    }

    return $filteredBooks;
}

// Super global variables -> Variables that come from php and available in every scope.
// $_SERVER // eg. $_SERVER -> It hold all data regarding server like request, response, etc.

// if ($_SERVER["REQUEST_URI"] === "/") {
//     echo "";
// } else {
//     echo "";
// }


// Ternary Condition
// echo $_SERVER["REQUEST_URI"] === "/" ? "" : "";


// To import or include view file we use require
require "index.view.php"; // including view file
