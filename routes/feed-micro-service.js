const express = require("express");
const router = express.Router();
const config = require("config");
const axios = require("axios");
const auth = require('../auth/auth');

const FEEDMSBASEURL = config.get('MS_FEED_BASEURL');

router.get("/feeds", auth, async (req, res) => {
    const fetchURI = FEEDMSBASEURL + req.path;
    console.log(fetchURI);
    try {
        let outPut = await axios.get(fetchURI);
        console.log(outPut.data);
        return res.json(outPut.data);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }

});

module.exports = router;