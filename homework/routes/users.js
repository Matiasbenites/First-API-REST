const express = require("express");
const userModel = require("../models/users");

const userRoutes = express.Router();

//Route default to return all users
// userRoutes.get("/", async (req, res) => {
//   const data = await userModel.findAll();

//   res.json({ status: 200, data: data });
// });


// Route for find by id
// userRoutes.get("/:id", async (req, res) => {
//   const data = await userModel.findById(req.params.id);

//   res.json({ status: 200, data: data });
// })


//Route for create an user
userRoutes.post("/create", async (req, res) => {
  const data = await userModel.create(req.body);

  res.json({ status: 200, data: data });
});

module.exports = userRoutes;
