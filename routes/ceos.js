const express = require('express'),
    router = express.Router(),
    ceosModel = require("../models/ceosModel");

router.get('/', async (req, res) =>{
    const executiveData = await ceosModel.getAll();
    console.log(executiveData)
    let snippet = `<h1>Apple CEOs</h1>`
    snippet += `<ul>`
    executiveData.map(executive => {
        snippet  += `<li>${executive.name} -- ${executive.year}</li>`
    })
    snippet += `</ul>`
    res
        .status(200)
        .send(snippet)
        .end()
});

module.exports = router;