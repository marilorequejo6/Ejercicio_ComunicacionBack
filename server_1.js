const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors());

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));

//START SERVER
app.listen(3001, function () {
 console.log("Server running 3001");
});