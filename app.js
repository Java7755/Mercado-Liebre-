const express = require('express');
const app = express();
const path = require("path");
app.use(express.static("public"))

app.get("/",function (req, res) {
    
    res.sendFile(path.join(__dirname,"views","index.html"))
    
})

// app.get("/prueba", function(req, res){
//     res.send("soy prueba")
    
// })

app.listen (3001,() => console.log("Levantando un servidor con Express"))