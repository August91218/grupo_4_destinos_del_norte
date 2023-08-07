let express=require("express");
let app=express();
let path=require("path");
app.listen("3000", function () {
    console.log("Servidor corriendo")
});
app.use(express.static("public"))
app.get("/",function (req,res) {

    res.sendFile(path.join(__dirname,"index.html"))
})
//Para la funcion de tienda y carrito donde los productos comprados se manden al carrito donde podran ser vistos//
const header = document.querySelector("header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");
window.addEventListener("scroll",function(){
    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
})
