const router = require('express').Router();
const Restaurant = require('../models/Restaurant');

router.get('/all',async (req,res) => {
    const u = await Restaurant.find();
    res.send(u);
});

module.exports = router;