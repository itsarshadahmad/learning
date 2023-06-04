"use strict";
const fs = require("fs");
const https = require("node:https");
const app = require("./app");
const PORT = 8080;

https
    .createServer(
        {
            key: fs.readFileSync("key.pem"),
            cert: fs.readFileSync("cert.pem"),
        },
        app
    )
    .listen(PORT, () => {
        console.log(`Server started at https://localhost:${PORT}/todo/all`);
    });
