const express = require("express");
const apiRoutes = require("./routes");
const db = require("./models");

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

db.sync()
  .then(() => {
    console.log("Conectado a SQLITE!!!");
  })
  .catch(() => {
    console.log("Se produjo un error al intentar conectarse a SQLITE");
  });

app.listen(3000, "localhost", () => {
  console.log("Servidor funcionando correctamente en puerto 3000");
});
