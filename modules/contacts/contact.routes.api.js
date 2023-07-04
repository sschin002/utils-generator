//initializing the routers
const express = require("express");
const router = express.Router();

const contactController = require("./contact.controller");

router.get("/", (req, res, next) => {
  res.json({ msg: "Hello from contact API!" });
});

// Create
router.post("/", (req, res, next) => {
  contactController.create(req.body);
});

// List
router.get("/list", async (req, res, next) => {
  console.log({ data: req.body });
  const list = await contactController.list();
  res.json({ data: list });
});

// getById
router.get("", async (req, res, next) => {});

// update
router.set("", async (req, res, next) => {});

// remove
router.delete("", async (req, res, next) => {});

module.exports = router;
