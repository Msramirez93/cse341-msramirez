const express = require('express');
const router = express.Router();

const myControllers = require('../controllers/newfriends');
const validation =require('../controllers/newfriends');


router.get('/:id', myControllers.getAll);

router.post('/', validation.saveFriends, myControllers.getSingle);

router.put('/:id', validation.saveFriends, myControllers.updateContact);

router.delete('/:id', myControllers.deleteContact);

module.exports = router;