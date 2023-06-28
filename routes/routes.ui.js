const express = require("express");
const router = express.Router();
const CC = require("currency-converter-lt");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/services", (req, res) => {
  res.render("services");
});

router.get("/gallery", (req, res) => {
  res.render("gallery");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/client", (req, res) => {
  res.render("client");
});
router.get("/converter/:currency1/:currency2/:value", async (req, res) => {
  const { currency1, currency2, value } = req.params;
  const currencyConverter = new CC({
    from: currency1,
    to: currency2,
    amount: Number(value),
  });

  const result = await currencyConverter.convert();
  res.send(`${result}`);
});

module.exports = router;
