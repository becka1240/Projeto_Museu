const express = require('express');
const app = express();
const mongoose = require("mongoose");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
require('dotenv/config');
const session= require("express-session");
app.use(session({
    secret:'ifpe',
    saveUninitialized:false,
    resave:false
}));
mongoose.connect(process.env.MONGO_URI);

const obraRoutes = require("./routes/obraRoutes");
app.use(obraRoutes);

const funcionarioRoutes = require("./routes/funcionarioRoutes");
app.use(funcionarioRoutes);


const usuarioRoutes = require("./routes/usuarioRoutes");
app.use(usuarioRoutes);

app.get("/", function(req,res){
    if(req.session.usuario){
        res.render("index");
    }else{
        res.redirect("/usuarios/loginUsuario");
    }
});

app.use(function(req, res) {
    res.status(404).render("404");
});

app.listen(process.env.PORT, function(){
    console.log("Rodando");
});




