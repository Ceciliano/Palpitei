const restful = require('node-restful');
const mongoose = require('mongoose');
const pergunta = require('../model/pergunta').pergunta;

const grupo = new mongoose.Schema({
  nome: {type: String, required: true, unique: true},
  perguntas: [pergunta],
});

module.exports = restful.model('Grupo', grupo);
