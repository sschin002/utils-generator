const express = require("express");
const router = express.Router();

const apiRouter = require("./routes.api");
const uiRouter = require("./routes.ui");

router.use("/api/vi", apiRouter);
router.use("/", uiRouter);

module.exports = router;
