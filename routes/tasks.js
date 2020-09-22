const db = require('../models/conn');
const userList = require('../models/usersModel');

const express = require('express'),
    router = express.Router(),
    tasksList = require('../models/tasksModel');

router.get('/', async (req, res) => {
        let user_id = req.session.user_id
        const taskData = await tasksList.getAll(user_id);
        console.log('Task data: ', taskData)
        return res.render("template", {
            locals: {
                title: "Tasks",
                data: taskData,
                is_logged_in: req.session.is_logged_in,
            },
            partials: {
                partial: "partial-tasks"
            }
        });
    })

router.post('/', async (req, res) => {
    console.log(req.body)
    let user_id = req.session.user_id
    const { task } = req.body;
    await tasksList.createTask(user_id, task);
    res.redirect(`back`)
    });
    

module.exports = router