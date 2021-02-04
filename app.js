const connect = require('./connection/connect')
const Router = require('./routes/web')
const path = require('path')

connect.app.set('views', path.join(__dirname, '/resources/views/'));
connect.app.set('view engine','ejs')

connect.app.use(connect.express.static(__dirname + '/public'));
connect.app.use(Router)
connect.server.listen(1337)