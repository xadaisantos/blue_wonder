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

app.get("/textmanipulator", (req, res) => {
    res.render("textmanipulator", {css: "textmanipulatorStyle.css", js: "textmanipulatorJs.js"});
})

app.get("/equacao", (req, res) => {
    res.render("equacao", {css: "equacaoStyle.css", js: "equacaoJs.js"});
})

app.get("/jogodavelha", (req, res) => {
    res.render("jogodavelha", {css: "jogodavelhaStyle.css", js: "jogodavelhaJs.js"});
})

app.get("/counter", (req, res) => {
    res.render("counter", {css: "counterStyle.css", js: "counterJs.js"});
})

app.get("/about", (req, res) => {
    res.render("about", {css: "aboutStyle.css", js: ""});
})

const port = process.env.PORT || 3000;
app.listen(port);