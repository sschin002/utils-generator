const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "Hello from API" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
