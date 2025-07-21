const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const {crearFactura} = require('./CONTROLADORES/FACTURAS');

app.use(cors());
app.use(express.json()); // Permite recibir y enviar datos en formato JSON

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));

// Middleware para crear una nueva factura
app.post("/factura/:id/:cliente/:numFactura/:data", crearFactura);

//START SERVER
app.listen(3000, function () {
 console.log("Server running 3000");
});