const express = require("express");
const session = require("express-session");
const todo = require("./routes/todo");
const auth = require("./routes/auth");
const cors = require("cors");
require("dotenv").config();

const sessionSecret = "keyboard cat";
const app = express();

app.use(express.json());
app.use(
    session({
        secret: sessionSecret,
        saveUninitialized: false,
        resave: false,
        cookie: { secure: true, maxAge: 30000 },
    })
);
app.use(
    cors({
        origin: "https://localhost:3000",
    })
);

// Routes
app.use("/auth", auth);
app.use("/todo", todo);

module.exports = app;
