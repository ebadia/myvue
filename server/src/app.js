const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    msg: "Welcome to my api zone!"
  });
});

app.post("/register", (req, res) => {
  res.send({
    msg: `Hello, ${req.body.email}. Welcome here!`
  });
});

app.listen(process.env.PORT || 8081);
