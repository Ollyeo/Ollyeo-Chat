const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

const async = require('async');

const socket = require('socket.io');

const server = new Hapi.Server({
    port: 8080,
    host: "0.0.0.0",
    routes: {
        files: {
            relativeTo: Path.join(__dirname, '../build')
        }
    }
});

// Resource

const users = [];
const messages = [];

const io = socket(server.listener)
console.log(io);
//const io = socket(server)
//(server.listener);

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
        
    socket.on('message', (recv) => {
        let author  = recv.author;
        let message = recv.message;
 
        console.log('author is ' + author);
        console.log('message is ' + message);
            
        var text = String(message || '');
            
        if (!text)
            return;
        
        let send = {
            author: author,
            message: text
        }; 
            
        broadcast('message', send);
        messages.push(send);
    });
        
    socket.on('identify', (name) => {
        console.log('name is ' + name)
        
        updateUser( String(name || 'Anonymous')).then(() => {
            console.log('updateUser Done!')
            socket.emit('users', users);
        }).catch((err) => {
            console.log(err);
        })
    });
});

const updateUser = async (name) => {
    users.map( async (name) => {
        broadcast('user', name);
    })
}

function broadcast(event, data){
    users.forEach((socket) => {
        socket.emit(event, data);
    });
}


const provision = async () => {
    await server.register(Inert);
    
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler:{
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true,
            }
        }
    });
    
    server.route({
        method: 'GET',
        path: '/',
        // handler:{
        //     file: 'hello.html'
        // }
        handler(request, h){
            return h.file('index.html')
        }
    });
    
    await server.start();
    
    console.log('Server running at:', server.info.uri);
};

provision().then(() => {
    console.log('Promise Resolved');
}).catch((err) => {
    console.log('Promise Rejected');
    console.log(err);
});