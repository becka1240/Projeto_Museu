const express =  require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");
const obraController = require("../controllers/obraController");

routes.get("/obras",auth,obraController.relatorioObra);
routes.get("/obras/cadastrarObra",auth,obraController.cadastrarGetObra);
routes.post("/obras", obraController.cadastrarPostObra);
routes.get("/obras/excluir/:identificacao",auth,obraController.excluirObra);
routes.get("/obras/atualizar/:identificacao",auth,obraController.atualizarObra);
routes.post("/obras/atualizar",auth, obraController.atualizarPostObra);
routes.get("/obras/:identificacao",auth,obraController.detalharObra);

module.exports = routes;