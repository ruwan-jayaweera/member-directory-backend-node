var restify = require('restify');
var bunyan = require('bunyan');


var log = new bunyan.createLogger({
    name: 'Member Directory API Logger',
    stream: bunyan.stdout
})

var options = {
    name: 'Member Directory API',
    log: log
};
var server = restify.createServer(options);

server.pre(function (request, response, next) {
    request.log.info({ req: request }, 'REQUEST');
    next();
});

module.exports = server;

require('./route');
