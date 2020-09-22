const express = require('express'),
    router = express.Router(),
    tasksList = require('../models/tasksModel')

const renderIndex = async (req, res) => {
    const taskData = await tasksList.getAll();
    return res.render("template", {
        locals: {
            title: "Welcome",
            data: taskData,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            partial: "partial-login"
        }
    });
}

router.get('/', async (req, res) => {
    renderIndex(req, res);
});


module.exports = router;