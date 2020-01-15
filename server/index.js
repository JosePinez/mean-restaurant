const express = require('express');
const morgan = require('morgan');
const app = express();
const {mongoose} = require('./database');

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use('/api/restaurant', require('./routers/restaurant.routes'));
app.use('/api/menu', require('./routers/menu.routes'));
app.use('/api/reserve', require('./routers/reserve.routes'));
app.use('/api/table', require('./routers/table.routes'));
app.use('/api/user', require('./routers/user.routes'));
//Starting the server
app.listen(app.get('port'), ()=>{
    console.log("Server on port 4000");
});