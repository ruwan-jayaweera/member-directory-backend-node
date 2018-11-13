var restify = require('restify');

var options = {
    name: "Member Directory API"
};
var server = restify.createServer(options);

module.exports = server;
