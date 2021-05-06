require('dotenv').config()

const express = require("express");

const router = express.Router();

const app = express();


app.use(express.json());

app.use(express.urlencoded({
    extended: false
}));

app.use(
    (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }
)

app.use("/", router);
app.use("/cardpacks", require("./routes/cardpack"));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
  });