const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

// mongodb connection
mongoose
  .connect("mongodb://localhost:27017/utils-generator")
  .then(() => console.log("Database Connected!"));

const indexRouter = require("./routes");

//setting up the thiird party middlewares
app.use(morgan("tiny")); //middleware
app.use(cors()); //middleware
app.use(bodyParser.json());

// var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extended: false }));

//Setting up the ejs templating
app.set("view engine", "ejs");
app.set("views", "./views");

//Serving the static files
app.use(express.static("public"));

//trying to test application level erroe handling
app.get("/broken", (req, res, next) => {
  throw new Error("Broken");
});

//middleware
app.use("/", indexRouter);

//Application level Error Handling//global level handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong");
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
