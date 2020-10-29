const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routers/userRoutes')

function initilize_function(){
  configCoresPolicy();
  configBodyParser();
  setRouters();
  error404Handeler();
  errorHandler();
}
initilize_function();


function configCoresPolicy(){
    app.use(cors())
}

function configBodyParser(){
    app.use(bodyParser.json({extended:true}));
}

function setRouters(){
    app.use('/',userRoutes)
}

function error404Handeler(){
   app.use((req,res)=>{
       res.status(404).json({
           msg:'NOT FOUND',
           status: 404
       })
   })
}

function errorHandler(){
    app.use((err,req,res,next)=>{
       res.status(500).json({
           msg:err.message || "Something went wrong. Please try again later",
           status:500
       })
    })
}

module.exports = app


