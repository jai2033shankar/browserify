var connect = require('connect');
var server = connect.createServer();

server.use(connect.staticProvider(__dirname));
server.use(require('browserify')({
    base : __dirname + '/js',
    mount : '/browserify.js',
}));

server.listen(9393);
console.log('Listening on 9393...');
