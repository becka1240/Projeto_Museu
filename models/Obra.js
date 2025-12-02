const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const obraSchema = Schema({
    autor: String,
    nome: String,
    identificacao: Number
});

module.exports = mongoose.model("Obra", obraSchema);