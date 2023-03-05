"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const PORT = 3000;
app.get("/hola", (req, res) => {
    res.json({
        message: "hola mundo",
    });
});
app.listen(PORT, () => {
    console.log("server corriendo en el puerto", PORT);
});
