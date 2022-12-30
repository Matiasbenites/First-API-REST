const express = require("express");

const userRoutes = express.Router();

userRoutes.get("/users", (req, res) => {
  res.json({ status: 200, data: {} });
});

module.exports = userRoutes;
