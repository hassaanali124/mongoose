const express = require("express");
const body = require("body-parser");
const mongoose = require("mongoose");
const port = 8080;
const app = express();
const contact = require("./models/contacts");

//DB contact
mongoose.connect('mongodb://localhost:27017/contactsapp', { useNewUrlParser: true }, () => {
    console.log("DB connected!");
})
//APP config
app.use(body.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    contact.find({}).then((data) => {
        res.render("index", { data: data })
    })
})

app.post("/", (req, res) => {

    contact.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    })
        .then(() => {
            res.redirect("/");
        })


})

app.listen(port, () => {
    console.log(`app is listening at port ${port}`);
});