const express = require("express");
const userModel = require("../models/users");

const userRoutes = express.Router();

//Route default to return all users

userRoutes.get("/", async (req, res) => {
  const data = await userModel.findAll();

  res.json({ status: 200, data: data });
});

// Route for find by id

userRoutes.get("/:id", async (req, res) => {
  const data = await userModel.findOne({
    where: { id: req.params.id },
  });
  res.json({ status: 200, data: data });
});

//Route for create an user

userRoutes.post("/create", async (req, res) => {
  const data = await userModel.create(req.body);

  res.json({ status: 200, data });
});

//Route for update an element by id

userRoutes.put("/:id", async (req, res) => {
  const data = await userModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  res.json({ status: 200, data });
});

//Route for delete an element

userRoutes.delete("/:id", (req, res) => {
  console.log("id", req.params.id);

  userModel
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((data) => {});

  res.json({ status: 200, data });
});

module.exports = userRoutes;
