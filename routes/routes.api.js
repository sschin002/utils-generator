const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "Hello from API" });
  } catch (err) {
    next(err);
  }
});
router.post("/form", (req, res, next) => {
  console.log({ data: req.body });
  res.json({ msg: "Hello from api" });
});

module.exports = router;
