const Grupo = require('../model/grupo');

module.exports = function (router) {
  router.route( '/respostas/lista/:id' ).get((req, res, next) => {
    Grupo.find({ 'perguntas._id': req.params.id })
    .then(grupo => res.status(200).json({ grupo }))
    .catch(err => res.status(400).json(err))
  });
    
  router.route('/respostas/inserir/:id').post((req, res, next) => {
    Grupo.findOne({ 'perguntas._id': req.params.id }).then(grupo => {
      grupo.perguntas[0].respostas.push({ "teamId":"4","status":"pending" });
      console.log(grupo);
    }).catch(err => res.status(400).json(err));
  });
};
