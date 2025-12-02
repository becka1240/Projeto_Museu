const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");

class UsuarioController{
    static async relatorioUsuario(req, res){
        const status = req.query.s;
        const usuarios = await Usuario.find();
        res.render("usuario/relatorioUsuario",{usuarios,status});
    }

    static async detalharUsuario(req, res){
        const usuario = await Usuario.findOne({email:req.params.email},)
        res.render("usuario/detalharUsuario",{usuario});
    }

    static async cadastrarPostUsuario(req, res){
        const usuario= req.body
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(usuario.senha, salt);
    
        const novaUsuario = new Usuario ({
            senha:hash,
            nome: usuario.nome,
            email:usuario.email
        });
    
        await novaUsuario.save();
    
        res.redirect("/usuarios?s=1");
    };x

    static cadastrarGetUsuario(req,res){
        const usuario={};
        res.render("usuario/cadastrarUsuario",{usuario});
    }

    static async excluirUsuario(req, res){
        const usuario= await Usuario.deleteOne({email:req.params.email});
        res.redirect("/usuarios?s=2");
    }

    
    static async atualizarUsuario(req, res){
        const usuario = await Usuario.findOne({email:req.params.email})
        res.render("usuario/cadastrarUsuario",{usuario});
     
    }

    static async atualizarPostUsuario(req, res){
        const usuario = req.body
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(usuario.senha, salt);
    
        await Usuario.updateOne({_id: usuario._id},{
            senha:hash,
            nome: usuario.nome,
           email: usuario.email
        });
        res.redirect("/usuarios?s=3");


    }

    
    static loginGetUsuario(req,res){
        const status = req.query.s;
        res.render("usuario/loginUsuario",{status});
    }

    static async loginPostUsuario(req,res){
        const usuario = await Usuario.findOne({email: req.body.email});

        if(usuario!=null){
            if(bcryptjs.compareSync(req.body.senha,usuario.senha)){
                req.session.usuario = usuario.email;
                res.redirect("/");
            }else{
                res.redirect("/usuarios/loginUsuario?s=4")
            }
        }else{
            res.redirect("/usuarios/loginUsuario?s=4")
        }
    }

    static logoutGet(req,res){
        req.session.usuario = null;
        res.redirect("/usuarios/loginUsuario");

    }

}

module.exports = UsuarioController;