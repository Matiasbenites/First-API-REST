const express = require("express");
const apiRoutes = require("./routes");
const db = require('./models')

const app = express();

app.use(express.json());



app.use("/api", apiRoutes);
app.get("/", (req, res) => {
  res.send("Hello World! 💫💫");
});

db.sync().then(() => {
  console.log("Conectado a SEQUELIZE 💠💠💠")
}).catch(() => {
  console.log("Se produjo un error al intentar conectarse a SEQUELIZE 💥💥💥 ")
});

app.listen(3000, "localhost", () => {
  console.log("Servidor funcionando correctamente en puerto 3000  💫💫💫");
});
