const Funcionario = require("../models/Funcionario");

class FuncionarioController{
    static async relatorioFuncionario(req, res){
        const status = req.query.s;
        const funcionarios = await Funcionario.find();
        res.render("funcionario/relatorioFuncionario",{funcionarios,status});
    }

    static async detalharFuncionario(req, res){
        const funcionario = await Funcionario.findOne({verificacao:req.params.verificacao});
        res.render("funcionario/detalharFuncionario",{funcionario});
    }

    static async cadastrarPostFuncionario(req, res){
        const funcionario = req.body
        const novaFuncionario = new Funcionario ({
            verificacao: funcionario.verificacao,
            nome: funcionario.nome,
            funcao: funcionario.funcao
        });
        await novaFuncionario.save();
        res.redirect("/funcionarios?s=1");
    };

    static cadastrarGetFuncionario (req,res){
        const funcionario ={}
        res.render("funcionario/cadastrarFuncionario",{funcionario});
    }

    static async excluirFuncionario(req, res){
        const funcionario = await Funcionario.deleteOne({verificacao:req.params.verificacao});
        res.redirect("/funcionarios?s=2");
    }

    static async atualizarFuncionario(req, res){
        const funcionario = await Funcionario.findOne({verificacao:req.params.verificacao})
        res.render("funcionario/cadastrarFuncionario",{funcionario});
     
    }

    static async atualizarPostFuncionario(req, res){
        const funcionario = req.body
        await Funcionario.updateOne({_id: funcionario._id},{
            verificacao: funcionario.verificacao,
            nome: funcionario.nome,
            funcao: funcionario.funcao
        }); 
      
        res.redirect("/funcionarios?s=3");
    };

    
}

module.exports = FuncionarioController;