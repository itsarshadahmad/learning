const router = require("express").Router();
const db = require("../model/db");
const { encrypt, decrypt } = require("../utils/secure");

router.get("/all", async (req, res) => {
    if (req.session.authenticated) {
        const { username, password } = req.session.user;
        const data = await db.findOne({ username });
        if (data !== null) {
            const decryptedPassword = decrypt(data.password);

            if (password === decryptedPassword) {
                const allTodo = data.todo;
                return res
                    .status(200)
                    .setHeader("Content-Type", "application/json")
                    .send(allTodo);
            }
        }
        return res.send("Something went wrong.");
    } else {
        return res.redirect("http://localhost:3000/login");
    }
});

router.post("/new", async (req, res) => {
    if (req.session.authenticated) {
        const { username, password } = req.session.user;
        const data = await db.findOne({ username });
        if (data !== null) {
            const decryptedPassword = decrypt(data.password);

            if (password === decryptedPassword) {
                const todoItem = req.body;
                if (data) {
                    data.todo.push(todoItem.todo);
                    await data.save();
                    return res.status(200).send({ ok: "Data added to server" });
                }
                return res
                    .status(400)
                    .send({ "Bad Request": "Something went wrong with data" });
            }
        }
        return res.send("Something went wrong.");
    } else {
        return res.redirect("http://localhost:3000/login");
    }
});

router.delete("/delete", async (req, res) => {
    if (req.session.authenticated) {
        const { username, password } = req.session.user;
        const data = await db.findOne({ username });
        if (data !== null) {
            const decryptedPassword = decrypt(data.password);

            if (password === decryptedPassword) {
                const { todo } = req.body;
                if (todo) {
                    if (data) {
                        const todoLowerCase = todo.toLowerCase();

                        for (let i = 0; i < data.todo.length; i++) {
                            const itemLowerCase = data.todo.at(i).toLowerCase();
                            if (todoLowerCase === itemLowerCase) {
                                data.todo.splice(i, 1);
                                await data.save();
                                return res.send("Deleted");
                            }
                        }
                    }
                }
            }
        }
        return res.send("Something went wrong.");
    } else {
        return res.redirect("http://localhost:3000/login");
    }
});

module.exports = router;
