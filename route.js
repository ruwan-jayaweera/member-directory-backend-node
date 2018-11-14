var server = require('./server');
var resources = require('./resources');

//Profile
server.get('/profiles/:id', resources.profiles.read);
server.post('/profiles', resources.profiles.create);
server.put('/profiles', resources.profiles.update);
server.del('/profiles/:id', resources.profiles.delete);