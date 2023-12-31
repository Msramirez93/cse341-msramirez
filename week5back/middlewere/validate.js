const validator = require('../helpers/validate');

const saveContact = (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    email: 'required|email',
    favoriteColor: 'required|string',
    birthday: 'string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


const saveFriends = (req, res, next) => {
    const validationRule = {
      firstName: 'required|string',
      lastName: 'required|string',
      email: 'required|email',
      favoriteFood: 'required|string',
      favoriteColor: 'required|string',
      career:'required|string',
      yearofGraduation:'required|string',
      friendship:'required|string',
      birthday: 'string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };
  
module.exports ={
  saveContact, saveFriends
}