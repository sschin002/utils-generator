const express = require("express");
const router = express.Router();
const CC = require("currency-converter-lt");

router.get("/", (req, res) => {
  res.render("index");
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
