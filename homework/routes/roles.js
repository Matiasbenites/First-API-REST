const express = require("express");
const rolModel = require("../models/roles");

const rolRoutes = express.Router();

//Default route for return existing roles
rolRoutes.get("/", async (req, res) => {
  const data = await rolModel.findAll();

  res.json({ status: 200, data: data });
});

//Route for find by one rol
rolRoutes.get("/:id", async (req, res) => {
  const data = await rolModel.findOne(req.body, {
    where: { id: req.params.id },
  });

  res.json({ status: 200, data: data });
});

//Route for create a new role
rolRoutes.post("/create", async (req, res) => {
  const data = await rolModel.create(req.body);

  res.json({ status: 200, data: data });
});

//Route for update an existing role
rolRoutes.put("/:id", async (req, res) => {
  const data = await rolModel.update(req.body, {
    where: { id: req.body.id },
  });

  res.json({ status: 200, data: data });
});

//Route for delete an existing role

rolRoutes.delete("/:id", async (req, res) => {
  console.log("id", req.params.id);

  rolModel
    .destroy({
      where: { id: req.params.id },
    })
    .then((data) => {
      res.json({ status: 200, data });
    });
});

module.exports = rolRoutes;
