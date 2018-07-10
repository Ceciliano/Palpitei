const Pergunta = require('../model/grupo');

Pergunta.methods(['get', 'post', 'put', 'delete']);
Pergunta.updateOptions({ new: true, runValidators: true });

module.exports = Pergunta;
