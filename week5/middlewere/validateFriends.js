const validator = require('../helpers/validate');

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