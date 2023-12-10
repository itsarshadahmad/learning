<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learning PHP - Part 1</title>
    <style>
        body {
            /* display: grid;
            place-items: center;
            height: 100vh; */
            font-family: sans-serif;
            /* margin: 0; */
        }
    </style>
</head>

<body>
    <!-- To Execute php file we need to start server using cmd:- php -S localhost:8888 -->
    <!-- <h1> -->
    <!-- PHP block -->
    <!-- <?php
            // echo "Hello World!" // echo is used to display output like print statement but it require html tag while processing on client side.

            // String concatenation #1: val1 . val2
            // In php string concatenation done using period (.). 
            // Its also called concat operator.
            # echo "Kingdom" . "Royal"; // Output -> KingdomRoyal


            # Comments OR // Comment
            /* Multiline Comment */


            // Variable declaration
            // $greet = "Kingdom";
            // echo "Build my $greet"; // String concatenation #2
            ?> -->
    <!-- </h1> -->


    <!-- Conditional Statement and boolean -->
    <!-- <?php
            // $name = "Dark Matter";
            // $read = true; // boolean value

            // if ($read) {
            //     $message = "<h1>You have read \"<i>$name</i>\"</h1>";
            // } else {
            //     // Create new variable and store value
            //     $message = "<h1>You haven't read \"<i>$name</i>\"</h1>";
            // }
            ?> -->

    <!-- <h1>You have read "<?php //echo "<i>$name</i>" 
                            ?>"</h1> -->

    <!-- <?php // echo $message; 
            ?> -->
    <!-- Shorthand for echo -->
    <!-- <?= $message ?> -->


    <!-- <h1>Recommended Books:</h1> -->
    <!-- <?php
            // $books = [
            //     "Atomic Habits",
            //     "The Power of your subconscious mind",
            //     "Think & Grow Rich"
            // ];
            ?> -->

    <!-- <ul>  -->
    <!-- <?php
            // foreach ($books as $book) {
            //     echo "<li>{$book}™️</li>"; // Within curly braces variable name will be rendered only
            // }
            // For Loop
            // for ($i = 0; $i < 5; $i++) {
            //     echo "<li>$i</li>";
            // }
            ?> -->

    <!-- Alternative foreach way (also same syntax for conditional statement) -->
    <!-- <?php foreach ($books as $book) : ?> -->
    <!-- <?= "<li>$book</li>" ?>  -->
    <!-- <?php endforeach; ?> -->
    <!-- </ul> -->


    <!-- Associative Array (Map -> Key, Value) -->
    <!-- <?php
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
    ?> -->

    <!-- <?php foreach ($books as $book) : ?> -->
    <!-- checking equality -->
    <!-- <?php if ($book["author"] === "Andy Weir") : ?> -->
    <!-- <a href=<?= $book["purchaseUrl"] ?>> -->
    <!-- <li><?= $book["name"] ?></li> -->
    <!-- </a> -->
    <!-- <?php endif; ?> -->
    <!-- <?= $book ?> -->
    <!-- <?php endforeach; ?> -->

    <ul>
        <?php foreach (filterByAuthor($books, "Andy Weir") as $book) : ?>
            <a href=<?= $book["purchaseUrl"] ?>>
                <li><?= $book["name"] ?></li>
            </a>
        <?php endforeach; ?>
    </ul>


    <!-- Functions -->
    <!-- <?php
    // Anonymous function
    function () {
    };

    // Lambda function
    $varName = function () {
    };


    // Higher Order Function (function with function passed parameter)
    function filter($items, $fn)
    {
        $filteredItems = [];

        foreach ($items as $item) {
            if ($fn($item)) {
                $filteredItems[] = $item;
            }
        }

        return $filteredItems;
    }

    filter([12, 4, 55, 2], function ($item) {
        return $item % 2 == 0;
    });
    ?> -->
</body>
</html>