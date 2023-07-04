const express = require("express");
const router = express.Router();

const contactRouter = require("../modules/contacts/contact.routes.api");

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "Hello from API" });
  } catch (err) {
    next(err);
  }
});
router.post("/form", (req, res, next) => {
  console.log({ data: req.body });
  res.json({ msg: "Thankyou for submitting form" });
});

router.use("/contacts", contactRouter);

module.exports = router;
