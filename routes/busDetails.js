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
    console.log(resDetails)
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

router.post('/:name?', async (req, res) => {
    console.log(req.body)
    const {title} = req.body,
        {review} = req.body,
        {rev_stars} = req.body,
        {restaurant_id} = req.body;
    await restaurantsList.createReview(title, review, rev_stars, restaurant_id);
    res.redirect('back')
});

module.exports = router