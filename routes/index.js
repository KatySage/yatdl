const express = require('express'),
    router = express.Router(),
    languages = require('../models/languages'),
    rankings = require('../models/rankings')

router.get('/', async (req, res) =>{
    const langData = await languages.getAll();
    const rankData = await rankings.getAll();
    res.render("template", {
        locals: {
            title: "Welcome",
            data_lang: langData,
            data_rank: rankData
        },
        partials: {
            partial: "partial-index"
        }
    });
});
router.put('/', async (req, res) =>{
    const langData = await languages.getAll();
    res.render("template", {
        locals: {
            title: "Welcome",
            data_lang: langData,
        },
        partials: {
            partial: "partial-index"
        }
    });
});

module.exports = router;