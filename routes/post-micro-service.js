const express = require("express");
const router = express.Router();


router.get("/post", (req, res) => {
    res.send("I ma feed MicroService");
})

module.exports = router;