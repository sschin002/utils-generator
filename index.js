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

app.use("/", indexRouter);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
