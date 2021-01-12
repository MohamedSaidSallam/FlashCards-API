require('dotenv').config()

const express = require("express");

const router = express.Router();

const app = express();


app.use(express.json());

app.use(express.urlencoded({
    extended: false
}));

app.use("/", router);
app.use("/cardpacks", require("./routes/cardpack"));

app.listen(process.env.port);