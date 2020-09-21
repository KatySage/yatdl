"use strict";
const http = require('http');
const path = require('path');

const hostname = '127.0.0.1';
const port = 5420;

const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    morgan = require('morgan'),
    logger = morgan('tiny'),
    helmet = require('helmet'),
    session = require('express-session'),
    FileStore = require('session-file-store')(session),
    cookieParser = require('cookie-parser'),
    app = express();


app
    .engine('html', es6Renderer)
    .set('views', './views')
    .set('view engine', 'html')


app.use(logger),
app.use(helmet())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(
    session({
        secret: "tubular",
        resave: false,
        saveUninitialized: true,
        is_logged_in: false
    })
);


const server = http.createServer(app);

server.listen(port, hostname, () =>{
    console.log(`Server is running at http://${hostname}:${port}`)
})
const rootController = require("./routes/index"),
    detailsController = require('./routes/busDetails'),
    usersController = require('./routes/users')

app
    .use('/', rootController)
    .use('/business', detailsController)
    .use('/users', usersController)