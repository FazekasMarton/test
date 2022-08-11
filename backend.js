// Load modules.
const express = require("express");
const { url } = require("inspector");
const path = require("path")
const app = express()
//const port = 7000;
const port = process.env.PORT || 7000;
const cors = require("cors");

let data = {name: "Herold"}
app.use(express.json())
app.use(express.urlencoded())

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


//--------------------------
const backdata = [
    {
        name: "cap",
        size: 12,
        color: "red"
    },
    {
        name: "shirt",
        size: 18,
        color: "black" 
    },
    {
        ownername: data
    }
]

//---------------------------
var keve = [
    {
        name: "cap",
        size: 12,
        color: "red"
    },
    {
        name: "shirt",
        size: 18,
        color: "black" 
    },
]




app.post("/action", (request, response) => {
    console.log(request.body)
    keve = request.body
    let indexPath = path.join(
        __dirname,
        "./html/next.html"
    );
    console.log(indexPath);
    response.sendFile(indexPath);
})


app.get("/data", (req, res) => {
    res.send(keve)
});









