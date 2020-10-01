const express = require("express");
const app = express();
var db = require('./config/db');
const router = require("./routes/index");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();

db();

const PORT = process.env.PORT || 5000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Superb Server !!! :)");
})

app.use(router);


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});


