const express =  require("express");
const routes = express.Router();
const auth = require("../middlewares/usuarioAuth");
const usuarioController = require("../controllers/usuarioController");

routes.get("/usuarios",auth,usuarioController.relatorioUsuario);
routes.get("/usuarios/cadastrarUsuario",usuarioController.cadastrarGetUsuario);
routes.post("/usuarios", usuarioController.cadastrarPostUsuario);
routes.get("/usuarios/excluir/:email",auth,usuarioController.excluirUsuario);
routes.get("/usuarios/atualizar/:email",auth,usuarioController.atualizarUsuario);
routes.post("/usuarios/atualizar",auth, usuarioController.atualizarPostUsuario);
routes.get("/usuarios/logout",auth,usuarioController.logoutGet);
routes.get("/usuarios/loginUsuario",usuarioController.loginGetUsuario);
routes.post("/usuarios/loginUsuario",usuarioController.loginPostUsuario);
routes.get("/usuarios/:email",auth,usuarioController.detalharUsuario);

module.exports = routes;