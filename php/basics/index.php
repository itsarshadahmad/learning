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


// $books = [
//     [
//         "name" => "Atomic Habits",
//         "author" => "James Clear",
//         "purchaseUrl" => "https://www.amazon.in",
//         "releaseYear" => 2018
//     ],
//     [
//         "name" => "The Power of your subconscious mind",
//         "author" => "Joseph Murphy",
//         "purchaseUrl" => "https://www.amazon.in",
//         "releaseYear" => 1984
//     ],
//     [
//         "name" => "Think & Grow Rich",
//         "author" => "Napoleon Hill",
//         "purchaseUrl" => "https://www.amazon.in",
//         "releaseYear" => 1967
//     ],
//     [
//         "name" => "The Martian",
//         "author" => "Andy Weir",
//         "purchaseUrl" => "https://www.amazon.in",
//         "releaseYear" => 2011
//     ]
// ];

// function filterByAuthor($books, $author)
// {
//     $filteredBooks = [];
//     foreach ($books as $book) {
//         if ($book["author"] === $author) {
//             $filteredBooks[] = $book; // Append item to filteredBook list
//         }
//     }

//     return $filteredBooks;
// }

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
// require "index.view.php"; // including view file


// Classes and objects in PHP
// class Person
// {
//     public $name;
//     public $age;

//     // This is constructor
//     function __construct($name, $age)
//     {
//         $this->name = $name;
//         $this->age = $age;
//     }

//     // Access Modifiers (Specifiers)
//     // public $pubVar;
//     // protected $proVar;
//     // private $priVar;

//     public function breathe()
//     {
//         // This keyword is used access current instance of class.
//         echo $this->name . " is breathing.";
//     }
// }

// $person = new Person();
// $person = new Person("Joe", 35);
// $person->name = "Joe";
// $person->age = 35;

// print("Person name  {$person->name}\n");
// print("Person age is {$person->age}\n");

// $person->breathe();

// user-defined functions are not case-sensitive
// function test(){
//     echo "Hello World";
// }

// Test();

// $x = 5;
// $y = 10;

// function myTest()
// {
//     global $x, $y; // Global keyword is used to access a global variable from within a function.
//     $y = $x + $y;
// }

// PHP also stores all global variables in an array called $GLOBALS[index].
// The index holds the name of the variable. It can be accessed from anywhere and it can used to update global variables directly.
// $GLOBALS["x"]

// myTest();
// echo $y; // outputs 15


// Static -> Normally function variables are garbage collected after its execution but static function variable exist after execution and is not garbage collected, so values stored in that variable exist.
// function myTest()
// {
//     static $x = 0;
//     echo $x;
//     $x++;
// }

// Each time function called value increment from previous value. eg. 0 -> 1 -> 2.
// myTest();
// myTest();
// myTest();

// print($x);

/*
PHP supports the following data types:

String
Integer
Float (floating point numbers - also called double)
Boolean
Array
Object
NULL
Resource
*/

// $cars = array("Volvo", "BMW", "Toyota");
// var_dump($cars); // displays information about a variable


// print strrev("Joe Rogan"); // Reverse string

// print strlen("Joe Rogan"); // String length


