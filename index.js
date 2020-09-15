"use strict";
const http = require('http')

const hostname = '127.0.0.1'
const port = 5420

const express = require('express');
const app = express();

const server = http.createServer(app);

server.listen(port, hostname, () =>{
    console.log(`Server is running at http://${hostname}:${port}`)
})
const rootController = require("./routes/index")
const ceosController = require("./routes/ceos")
app.use('/', rootController)
app.use('/ceos', ceosController)