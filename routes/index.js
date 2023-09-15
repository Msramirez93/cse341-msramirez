const routes = require('express').Router();

const mycontroller = require('../controllers');
routes.get('/',mycontroller.awesomeFuntion);
routes.get('/awesonme',mycontroller.returnAnotherPerson);

module.exports = routes;