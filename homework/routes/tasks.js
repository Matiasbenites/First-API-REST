const express = require("express");
const taskRoutes = express.Router();

taskRoutes.get("/tasks", (req, res) => {
  res.json({ status: 200, data: {} });
});


module.exports = taskRoutes;