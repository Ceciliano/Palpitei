const restful = require('node-restful');
const mongoose = require('mongoose');

const resposta = new mongoose.Schema({
  nome: {type: String, required: true},
});

const pergunta = new mongoose.Schema({
  nome: {type: String, require: true},
  respostas: [resposta],
  done: {type: Boolean, require: true, default: false},
  createAt: {type: Date, default: Date.now},
});

module.exports.mongo = pergunta;
module.exports.restful = restful.model('Pergunta', pergunta);
