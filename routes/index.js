const express = require('express'),
    router = express.Router(),
    restaurantsList = require('../models/restaurants')
const renderIndex = async (req, res) => {
    const resData = await restaurantsList.getAll();
    return res.render("template", {
        locals: {
            title: "Welcome",
            data: resData,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            partial: "partial-index"
        }
    });
}

router.get('/', async (req, res) =>{
    renderIndex(req, res);
});


module.exports = router;