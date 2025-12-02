const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const funcionarioSchema = Schema({
    nome: String,
    funcao: String,
    verificacao: Number,
});

module.exports = mongoose.model("Funcionário", funcionarioSchema);