<?php

// parsing url to separate query string and request url path
$uri = parse_url($_SERVER["REQUEST_URI"])["path"];

// Handing routes (Map - Key is route, value is handler file)
$routes = [
    "/" => "controllers/index.php",
    "/about" => "controllers/about.php",
    "/contact" => "controllers/contact.php",
];

function routeToController($uri, $routes)
{
    if (array_key_exists($uri, $routes)) {
        require $routes[$uri];
    } else {
        abort();
    }
}

function abort($code = 404) // 404 is default value
{
    http_response_code($code); // Response status code
    require "views/{$code}.php";
    die(); // To exit (end) script
}

routeToController($uri, $routes);
