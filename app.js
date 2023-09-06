const express = require('express');
const app = express();
const path = require("path");
app.use(express.static("public"))


app.get("/",function (req, res) {
 res.sendFile(path.join(__dirname,"views","index.html"))
})

// Configura una ruta para servir register.html
app.get("/",function (req, res) {
  res.sendFile(__dirname, "views", "register.html");
})

// Configura una ruta para servir login.html
app.get("/",function (req, res) {
   res.sendFile(__dirname, "views", "login.html");
})

//  app.get("/", function(req, res){
//      res.send("soy prueba")
    
//  })

app.listen (3001,() => console.log("Levantando mi servidor 3001"))