const express = require("express");
const rolRoutes = express.Router();

rolRoutes.use("/roles", (req, res) => {
  res.json({ status: 200, data: {} });
});

module.exports = rolRoutes;
