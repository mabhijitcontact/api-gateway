const express = require("express");
const router = express.Router();
const feedMS = require("./feed-micro-service");
const postMS = require("./post-micro-service")
router.use((req, res, next) => {
    console.log("Hurray--->>>>>", req.path)
    next()
});

router.use(feedMS);
router.use(postMS);

exports.module = router; 