const express =  require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");
const funcionarioController = require("../controllers/funcionarioController");

routes.get("/funcionarios",auth,funcionarioController.relatorioFuncionario);
routes.get("/funcionarios/cadastrarFuncionario",auth,funcionarioController.cadastrarGetFuncionario);
routes.post("/funcionarios",auth, funcionarioController.cadastrarPostFuncionario);
routes.get("/funcionarios/excluir/:verificacao",auth,funcionarioController.excluirFuncionario);
routes.get("/funcionarios/atualizar/:verificacao",auth,funcionarioController.atualizarFuncionario);
routes.post("/funcionarios/atualizar",auth, funcionarioController.atualizarPostFuncionario);
routes.get("/funcionarios/:verificacao",auth,funcionarioController.detalharFuncionario);

module.exports = routes;