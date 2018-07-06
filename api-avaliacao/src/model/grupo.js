const restful = require('node-restful');
const mongoose = require('mongoose');

const resposta = new mongoose.Schema({
    nome: { type: String, required: true },
    count: {type: Number, required: true }
  })
  
const pergunta = new mongoose.Schema({
    nome:{type: String, require: true},
    respostas:[resposta],
    done: {type: Boolean, require:true, default: false},
    createAt: {type: Date, default: Date.now}
})

const grupo = new mongoose.Schema({
    nome: { type: String, required: true },
    perguntas : [pergunta]
})

module.exports = restful.model('Grupo', grupo)