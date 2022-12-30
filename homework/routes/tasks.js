const express = require("express");
const taskRoutes = express.Router();

//Define of a route
taskRoutes.get("/tasks", (req, res) => {
  res.json({ status: 200, data: {} });
});


module.exports = taskRoutes;