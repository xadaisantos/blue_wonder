const express = require("express");
const path = require("path");
const exphbs = require('express-handlebars');

const app = express();

app.engine("handlebars", exphbs({ defaultLayout:"main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// ----- Middleware --------------------------------------------

app.use(express.static(path.join(__dirname, "public"))); // Defines a folder for static
// app.use(express.urlencoded( { extended: true } )); // bodyParser, comes with express

// ----- Middleware --------------------------------------------

app.get(["/", "/home"], (req, res) => {
    res.render("home", {css: "homeStyle.css", js: ""});
})

app.get("/conversordetexto", (req, res) => {
    let name = "conversordetexto";
    res.render(name, {css: `${name}.css`, js: `${name}.js`});
})

app.get("/equacao", (req, res) => {
    let name = "equacao";
    res.render(name, {css: `${name}.css`, js: `${name}.js`});
})

app.get("/conversordetaxas", (req, res) => {
    let name = "conversordetaxas";
    res.render(name, {css: `${name}.css`, js: `${name}.js`});
})

app.get("/jogodavelha", (req, res) => {
    let name = "jogodavelha";
    res.render(name, {css: `${name}.css`, js: `${name}.js`});
})

app.get("/contador", (req, res) => {
    let name = "contador";
    res.render(name, {css: `${name}.css`, js: `${name}.js`});
})

app.get("/sobre", (req, res) => {
    let name = "sobre";
    res.render(name, {css: `${name}.css`, js: `${name}.js`});
})

const port = process.env.PORT || 3000;
app.listen(port);
