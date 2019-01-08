const express = require('express');//importar express
const config = require('./server/config');
//database
require('./database');
//starting the server
const app = config(express());
//express();//return a object


app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});