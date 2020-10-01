const express = require("express");
const app = express();
const router = require("./routes");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Basic API Gateway, It will show how API Gateway Works")
});

app.use(router);
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})


