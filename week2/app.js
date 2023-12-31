const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();

app
.use(bodyParser.json())
.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
})
.use('/', require('./routes'));

mongodb.initDb((err,mongodb) =>{
    if (err){
        console.log(err);
    }else{
        app.listen(port);
        console.log(`connect to Db and listening on ${port}`);
    }
});