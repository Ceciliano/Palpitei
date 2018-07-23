const Grupo = require('../model/grupo');

module.exports = function(router) {
    router.route( '/perguntas/lista/:id' ).get((req, res) => {
      Grupo.findOne({'_id': req.params.id})
      .then((grupo) => res.status(200).json(grupo.perguntas))
      .catch((err) => res.status(400).json(err));
    });

    router.route('/perguntas/:id').post((req, res) => {
      Grupo.findOne({'._id': req.params.id})
      .then((grupo) => {
        grupo.perguntas.push(req.body);
        res.status(200).json(grupo);
      })
      .catch((err) => res.status(400).json(err));
    });
};
