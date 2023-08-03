/* Requerir los paquetes que vamos a utilizar */
const express = require("express");
const app = express();
const path = require("path")

/* Declarar los recursos estaticos (donde se encuentra public) */
app.use(express.static("public"));


/* Poner en escucha el servidor */
app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000/home"));



/* ------------ Manejo de rutas -------------- */
app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.get("/vender", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/vender.html"))
})

app.get("/tiendasOficiales", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/tiendasOficiales.html"))
})

app.get("/ayuda", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/ayuda.html"))
})

app.get("/ofertas", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/ofertas.html"))
})