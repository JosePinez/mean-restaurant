const express = require('express');
const morgan = require('morgan');
const app = express();
const {mongoose} = require('./database');
const cors = require('cors');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
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