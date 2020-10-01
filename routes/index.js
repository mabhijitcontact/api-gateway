const express = require("express");
const router = express.Router();
const feedMS = require("./feed-micro-service");
const postMS = require("./post-micro-service");
const userController = require("../apigatewayController/index");

router.use((req, res, next) => {
    console.log("Hurray--->>>>>", req.path)
    next();
});

router.use(feedMS);
router.use(postMS);
router.use(userController);

module.exports = router; 