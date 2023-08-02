// Imports
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
require("ejs");
const port = process.env.PORT || 5000;

const { conexionDB } = require("./database.js");
conexionDB();

const app = express();

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(require("./routes/reserva.routes"));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res) => {
  res.status(404).send("<Error 404>");
});
// Starting the server
app.listen(port, () => console.log("Server on http://localhost:${port]"));
