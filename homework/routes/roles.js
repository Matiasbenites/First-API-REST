const express = require("express");
const rolRoutes = express.Router();


//Define of a route
rolRoutes.get("/roles", (req, res) => {
  res.json({ status: 200, data: {} });
});

module.exports = rolRoutes;
