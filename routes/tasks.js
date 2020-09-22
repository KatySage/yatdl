const db = require('../models/conn');
const userList = require('../models/usersModel');

const express = require('express'),
    router = express.Router(),
    tasksList = require('../models/tasksModel'),
    bcrypt = require('bcryptjs');
const renderIndex = async (req, res) => {
        const taskData = await tasksList.getAll();
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
    }


module.exports = router