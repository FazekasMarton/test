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

/* app.get("/data", (req, res) => {
    res.send(backdata)
}); */

var bodyParser=require("body-parser");

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// Process application/json
app.use(bodyParser.json());

app.post('/createEmp', function(req, res){  
//now req.body will be populated with the object you sent
console.log(req.body.name); //prints john
});

