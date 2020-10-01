const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require('jsonwebtoken')
const config = require("config");

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        //see if user exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }
        user = new User({
            name,
            email,
            password
        });
        // encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save(); //saving user in MongoDB.

        // Return json token
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, config.get("jwtToken"),
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router