const express = require('express'),
    router = express.Router(),
    tasksList = require('../models/tasksModel')
const renderIndex = async (req, res) => {
    const resData = await tasksList.getAll();
    return res.render("template", {
        locals: {
            title: "Welcome",
            data: resData,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            partial: "partial-login"
        }
    });
}

router.get('/', async (req, res) =>{
    res
        .send('OK')
        .sendStatus(200);
});


module.exports = router;