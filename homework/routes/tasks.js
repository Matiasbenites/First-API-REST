const express = require("express");
const taskModel = require("../models/tasks");

const taskRoutes = express.Router();

//Default route to return all tasks
taskRoutes.get("/", async (req, res) => {
  const data = await taskModel.findAll();

  res.json({ status: 200, data: data });
});

//Route for find by one task

taskRoutes.get("/:id", async (req, res) => {
  const data = await taskModel.findOne({
    where: { id: req.params.id },
  });
  res.json({ status: 200, data: data });
});

//Route for create a new task

taskRoutes.post("/create", async (req, res) => {
  const data = await taskModel.create(req.body);

  res.json({ status: 200, data: data });
});

//Route for update a task

taskRoutes.put("/:id", async (req, res) => {
  const data = await taskModel.update(req.body, {
    where: { id: req.params.id },
  });
});

//Route for delete a task

taskRoutes.delete("/:id", async (req, res) => {
  console.log("id", req.params.id);

  const data = await taskModel
    .destroy({
      where: { id: req.params.id },
    })
    .then((data) => {});
  res.json({ status: 200, data });
});
module.exports = taskRoutes;
