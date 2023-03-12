const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public")); // tbh never used path cus thought useless
app.set("view engine", "hbs");

app.get("/", (req, res) => { // arrow functions are good for callback functions
    res.render("home", {
        title: "Home",
        name: "Valtsu" // waltuh
    });
});
app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(3000, () => {
    console.log("The server is running on port 3000");
});

// I've changed code structure a bit to make it more readable, like made segments (requiring modules, setting up express, routing, launching)