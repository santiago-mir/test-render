"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var PORT = 3000;
app.get("/hola", function (req, res) {
    res.json({
        message: "hola mundo"
    });
});
app.listen(PORT, function () {
    console.log("server corriendo en el puerto", PORT);
});
