const express = require('express'),
    router = express.Router(),
    restaurantsList = require('../models/restaurants')
const renderIndex = async res => {
    const resData = await restaurantsList.getAll();
    return res.render("template", {
        locals: {
            title: "Welcome",
            data: resData,
        },
        partials: {
            partial: "partial-index"
        }
    });
}

router.get('/', async (req, res) =>{
    renderIndex(res);
});
// router.post('/', async (req, res) =>{
//     for (let key in req.body){
//         const dbResponse = await languages.updateStatus(req.body[key], key)
//     }
//     //res.redirect('/');
//     renderPage(res);
// });

module.exports = router;