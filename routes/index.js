const express = require('express');
const router = express.Router();
const services = require('../services/users');

router.get('/', async function(req, res, next) {
    try {
        res.render('index', {
            test: "I'm a variable"
        });
    } catch(err) {
        console.error(`Error while getting users info `, err.message);
        next(err);
    }
});

module.exports = router;