let express=require("express");
let app=express();
let path=require("path");
app.listen("3000", function () {
    console.log("Servidor corriendo")
    
})
app.use(express.static("public"))
app.use(express.static("views"))
app.get("/",function (req,res) {
    res.sendFile(path.join(__dirname,"./index.html"))
    
})