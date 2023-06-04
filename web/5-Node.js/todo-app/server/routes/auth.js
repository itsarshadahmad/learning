const router = require("express").Router();
const db = require("../model/db");
const { encrypt, decrypt } = require("../utils/secure");

router.post("/login", async (req, res) => {
    const user = req.body;

    if (req.session.authenticated) {
        const { username, password } = req.session.user;
        const dataResp = await db.findOne({ username });

        if (dataResp !== null) {
            const decryptedPassword = decrypt(dataResp.password);
            if (password === decryptedPassword) {
                return res.status(200).send({ ok: "Authenticated" });
            }
        }
    }

    try {
        const data = await db.findOne({ username: user.username });
        const decryptedPassword = decrypt(data.password);
        if (data === null) {
            return res.status(400).send({
                "Bad Request": "User not found. Please check your credentials.",
            });
        }

        if (decryptedPassword === user.password) {
            req.session.authenticated = true;
            req.session.user = user;
            return res.send({ ok: "Authenticated" });
        } else {
            return res.status(400).send({
                "Bad Request": "Please enter correct user credentials.",
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            "Server Error": "Something went wrong!",
        });
    }
});

router.post("/register", async (req, res) => {
    const user = req.body;

    if (req.session.authenticated) {
        const { username, password } = req.session.user;
        const dataResp = await db.findOne({ username });
        if (dataResp !== null) {
            const decryptedPassword = decrypt(dataResp.password);

            if (password === decryptedPassword) {
                return res.status(200).send({ ok: "Authenticated" });
            }
        }
    }

    try {
        const data = await db.findOne({ username: user.username });
        const encryptedPassword = encrypt(user.password);

        if (data == null) {
            db({
                username: user.username,
                password: encryptedPassword,
                todo: [],
            }).save();

            req.session.authenticated = true;
            req.session.user = {
                username: user.username,
                password: encryptedPassword,
            };
            return res.status(201).send({ ok: "User created" });
        } else {
            return res.redirect("http://localhost:3000/login")
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            "Server Error": "Something went wrong!",
        });
    }
});

module.exports = router;
