const db = require('../models/conn');
const UserList = require('../models/usersModel');
const userList = require('../models/usersModel');

const express = require('express'),
    router = express.Router(),
    bcrypt = require('bcryptjs');

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
})
router.get("/", (req, res) => {
    res.redirect("/users/login");
});
router.get('/login', async (req, res) =>{
    res.render("template", {
        locals: {
            title: "Log In",
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            partial: "partial-login"
        }
    });
});
router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const userInstance = new UserList(null, null, email, password)
    userInstance.logIn().then(response =>{
        req.session.is_logged_in = response.isValid;
        if (!!response.isValid){
            const { name, user_id } = response;
            req.session.name = name;
            req.session.user_id = user_id;
            res.redirect('/tasks')
        } else {
            res.sendStatus(401);
        }
    })
});

router.get('/signup', async (req, res) =>{
    res.render("template", {
        locals: {
            title: "Sign Up",
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            partial: "partial-signup"
        }
    });
});
router.post('/signup', (req, res) => {
    const {name, email, password} = req.body,
        salt = bcrypt.genSaltSync(10),
        hash = bcrypt.hashSync(password, salt)
    const userInstance = new userList(null, name, email, hash);
    userInstance.signUp().then(response => {
        if(response.id !== undefined){
            res.redirect('/users/login')
        } else {
            res.redirect('/users/signup')
        }
    })
});


module.exports = router