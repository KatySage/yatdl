const LanguagesList = require('../models/languages');

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
router.post('/', async (req, res) =>{
    console.log(req.body)
    const dbResponse = await languages.updateStatus(0, 'HTML')
    console.log(dbResponse)
    res.status(200).send('OK');
});

module.exports = router;