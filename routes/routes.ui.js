const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from UI");
});

// router.get("/converter/:currency1/:currency2/:value", (req, res) => {
//     const {currency}
// });

module.exports = router;
