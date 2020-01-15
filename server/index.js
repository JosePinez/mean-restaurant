const express = require('express');

const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares

//Routes

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log("Server on port 4000");
});