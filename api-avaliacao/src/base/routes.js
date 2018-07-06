const express = require('express')

module.exports = function(server){
  const router = express.Router()
  server.use('/api', router)

  const grupoService = require('../service/grupoService')
  grupoService.register(router, '/grupos')

  
  // require('../service/perguntaService')(router)
  require('../service/respostaService')(router)
}
