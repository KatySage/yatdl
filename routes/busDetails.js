const db = require('../models/conn');

const express = require('express'),
    router = express.Router(),
    restaurantsList = require('../models/restaurants')

router.get('/:slug?', async (req, res) =>{
    if(req.params.slug === undefined){
        res.redirect('/')
    } else{
    const resDetails = await restaurantsList.getDetails(req.params.slug)
    const revDetails= await restaurantsList.getReviews(req.params.slug)
    console.log(revDetails)
    res.render("template", {
        locals: {
            title: "Details",
            data: resDetails,
            revData: revDetails,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            partial: "partial-details"
        }
    });}
});

router.post('/:slug?', async (req, res) => {
    console.log(req.body)
    const {title, review, rev_stars, restaurant_id, slug} = req.body;
    await restaurantsList.createReview(title, review, rev_stars, restaurant_id);
    res.redirect(`/business/${slug}`)
});

module.exports = router