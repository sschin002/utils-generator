const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ejs = require("ejs");

const app = express();

const indexRouter = require("./routes");

//setting up the thiird party middlewares
app.use(morgan("tiny")); //middleware
app.use(cors()); //middleware

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
