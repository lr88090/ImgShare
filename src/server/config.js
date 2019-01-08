const path = require('path');
const exphbs = require('express-handlebars');
module.exports =  app =>{//funcion flecha
    //settings
    app.set('port', process.env.PORT || 3000)//si hay un puerto en el sistema se usa ese si no usa el purto 3000
    app.set('views',path.join(__dirname,'views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts')
        

    }))
    //middlewears

    //routes

    //errohandlers

    return app;
}