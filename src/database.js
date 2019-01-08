const mongoose = require('mongoose');
const { database } = require('./keys');
mongoose.connect(database.URI,{
    useNewUrlParser: true
})//coneccion con la base de datos
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));