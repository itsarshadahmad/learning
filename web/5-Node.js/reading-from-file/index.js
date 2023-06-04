"use strict";

const fs = require("fs");
const path = require("path");

fs.createReadStream(path.join(__dirname, "data.json")).on(
    "data",
    async (data) => {
        // extracting file
        const items = await JSON.parse(data);
        console.log(await items);
    }
);
