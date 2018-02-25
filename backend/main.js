'use strict';

const Hapi = require('hapi');
const socket = require('socket.io');

// Create a server with a host and port
const server = new Hapi.Server({
    debug: { request:['error'] },
});

server.connection({
    port:8080,
})

/*
server.register({
    plugin: require('inert')
}).then(() => {
    server.route({
        method : 'GET',
        path : '/{param*}',
        handler: {
            directory : {
                path : '../build'
            }
        }
    });
})*/

const users = [];
const messages = [];

// socket io

const io = socket(server.listener);

// web socket setting.
io.on('connection', (socket) => {
    console.log(socket.id);
    
    // TODO :: Message Update
    // TODO :: User Update
    // TODO :: Message Update

    messages.forEach((data) => {
            socket.emit('message', data);
        });
        
        users.push(socket);
        
        socket.on('disconnect', () => {
            users.splice(users.indexOf(socket), 1);
            updateUser();
        });
        
        socket.on('message', (msg) => {
            var text = String(msg || '');
            
            if (!text)
                return;
        
            socket.get('name', (err, name) => {
               var data = {
                   name: name,
                   text: text
               };
               
               broadcast('message', data);
               messages.push(data);
            });
        });
        
        socket.on('identify', (name) => {
            socket.set('name', String(name || 'Anonymous'), (err) => {
                updateUser();
            })
        });
});

function updateUser(){
    async.map(
        users,
        (socket, callback) => {
            socket.get('name', callback);
        },
        (errs, names) => {
            broadcast('user', names);
        }
    );
}

function broadcast(event, data){
    users.forEach((socket) => {
        socket.emit(event, data);
    });
}

server.register([require('inert'), require('hapi-error')], function() {
    // Add the route
    //server.path(__dirname+'../build');
    server.route([
        //{ method: 'GET', path:'/', handler: { file: './public/index.html'} },
        { method: 'GET', path:'/', handler: function(req, reply) { reply.file('./public/index.html')} },
        { method: 'GET', path:'/favicon.ico', handler: function(req, reply) { reply.file('./public/favicon.ico')} },
        { method: 'GET', path:'/manifest.json', handler: function(req, reply) { reply.file('./public/manifest.json')} },
        { method: 'GET', path:'/hello', handler: function (request, h) { return 'hello world';}}
    ]),
    
    server.start(function() {
        console.log('Server running at:', server.info.uri);
    })
})

module.exports = server;