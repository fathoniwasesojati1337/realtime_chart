const faker = require("faker")
const connect = require('../../connection/connect')
function getdata(callback) {
    setInterval(() => {
        callback(faker.random.number())
    }, 100);
}

connect.io.sockets.on('connection', (socket)=>{
    getdata((result)=>{
        socket.emit('data',result)
    })
})   

const index = (req, res) => {
 
    res.render('index')
}

module.exports = {
    index
}
