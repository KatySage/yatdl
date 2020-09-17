"use strict";
const http = require('http');
const path = require('path');

const hostname = '127.0.0.1';
const port = 5420;

const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    app = express();

app
    .engine('html', es6Renderer)
    .set('views', './views')
    .set('view engine', 'html')

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const server = http.createServer(app);

server.listen(port, hostname, () =>{
    console.log(`Server is running at http://${hostname}:${port}`)
})
const rootController = require("./routes/index")
const detailsController = require('./routes/busDetails')

app
    .use('/', rootController)
    .use('/business', detailsController)