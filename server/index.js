const express = require('express');
const morgan = require('morgan');
const app = express();
const {mongoose} = require('./database');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Routes
app.use('/api/restaurant', require('./routers/restaurant.routes'));
app.use('/api/reserve', require('./routers/reserve.routes'));
app.use('/api/user', require('./routers/user.routes'));
//Starting the server
app.listen(app.get('port'), ()=>{
    console.log("Server on port 3000");
});
app.use(bodyParser.json());
app.post('/formulario', ( req,res )=>{
    configMensaje(req.body);
    res.status(200).send();
});