const db = require('../models/conn');

const express = require('express'),
    router = express.Router(),
    restaurantsList = require('../models/restaurants')

router.get('/:name?', async (req, res) =>{
    if(req.params.name === undefined){
        res.redirect('/')
    } else{
    const resDetails = await restaurantsList.getDetails(req.params.name)
    const revDetails= await restaurantsList.getReviews(req.params.name)
    console.log(revDetails)
    res.render("template", {
        locals: {
            title: "Details",
            data: resDetails,
            revData: revDetails
        },
        partials: {
            partial: "partial-details"
        }
    });}
});
module.exports = router;