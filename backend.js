// Load modules.
const express = require("express");
const { url } = require("inspector");
const path = require("path")
const app = express()
//const port = 7000;
const port = process.env.PORT || 7000;
const cors = require("cors");

let data = require("./public/frontend.js");
app.use(express.json())

// Server static files.
app.use(express.static("public"))
app.use(cors())

// Create new server.
app.get("/", (req, res) => {
    let indexPath = path.join(
        __dirname,
        "./html/index.html"
    );
    console.log(indexPath);
    res.sendFile(indexPath);
});
// Listen port.
app.listen(port, () => {
    console.log("My app listen in: " + port);
});

const addListing = (newItem) => {
    data = [...data, newItem]
}

const findListing = (id) => {
    return data.find(item => item.id === Number(id))
}

app.get("/data", (req, res) => {
    res.send(data)
});

app.post("/data", (req, res) => {
    addListing(req, res)
    res.status(201).send(data)
});

