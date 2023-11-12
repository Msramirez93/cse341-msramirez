const swagger =require('./swagger')
const express = require('express');
const router =express.Router();

router.use('/',require('./swagger'));
router.use('/contacts', require('./contacts'));
router.use('/friends', require('./friends'));

module.exports = router;
