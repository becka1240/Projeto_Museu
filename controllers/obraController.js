const Obra = require("../models/Obra");

class ObraController{
    static async relatorioObra(req, res){
        const status = req.query.s;
        const obras = await Obra.find();
        res.render("obra/relatorioObra",{obras,status});
    }

    static async detalharObra(req, res){
        const obra = await Obra.findOne({identificacao:req.params.identificacao})
        res.render("obra/detalharObra",{obra});
    }

    static async cadastrarPostObra(req, res){
        const obra = req.body
    
        const novaObra = new Obra ({
            autor: obra.autor,
            nome: obra.nome,
            identificacao: obra.identificacao
        });
    
        await novaObra.save();
    
        res.redirect("/obras?s=1");
    };

    static cadastrarGetObra(req,res){
        const obra={};
        res.render("obra/cadastrarObra",{obra});
    }

    static async excluirObra(req, res){
        const obra = await Obra.deleteOne({identificacao:req.params.identificacao});
        res.redirect("/obras?s=2");
    }

    
    static async atualizarObra(req, res){
        const obra = await Obra.findOne({identificacao:req.params.identificacao})
        res.render("obra/cadastrarObra",{obra});
     
    }

    static async atualizarPostObra(req, res){
        const obra = req.body
    
        await Obra.updateOne({_id: obra._id},{
            autor: obra.autor,
            nome: obra.nome,
            identificacao: obra.identificacao
        });
        res.redirect("/obras?s=3");
    }

}

module.exports = ObraController;