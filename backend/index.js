const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.get("/", (req, res) => {
  res.send("API funcionando");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

console.log("Variable de entorno MONGO_URI:", process.env.MONGO_URI);

const User = require("./models/User");
console.log("Modelo User cargado:", User);
