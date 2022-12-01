const { compare } = require('bcrypt');
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/practica2', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("Conexion exitosa");
        app.listen(port, function() {
            console.log("Servidor de api rest de musica escuchando en http://127.0.0.1:" + port);
        })
    }
})