var server = require('./server');

var port = Number(process.env.SERVER_PORT) || 8081;

server.listen(port, function(){
        console.log('Member Directory API Server Listening on %', server.address());
})