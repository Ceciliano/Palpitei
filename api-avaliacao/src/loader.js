var final server = require('./base/server');
require('./base/database');
require('./base/routes')(server);
