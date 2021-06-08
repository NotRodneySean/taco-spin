const express = require('express');
const router = express.Router();

router.get('/', async function(req, res, next) {
    try {
        res.render('index');
    } catch(err) {
        console.error(`Error while getting users info `, err.message);
        next(err);
    }
});

module.exports = router;