/** Auth-related routes. */

const User = require('../models/user');
const express = require('express');
const router = express.Router();
const  createTokenForUser  = require("../helpers/createToken")
const jsonschema = require("jsonschema");
const userRegisterSchema = require("../schemas/userRegister.json");
const userAuthSchema = require("../schemas/userAuth.json")
const ExpressError = require('../helpers/expressError');


/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 */

router.post('/register', async function(req, res, next) {
  try {
    const validatdor = jsonschema.validate(req.body, userRegisterSchema )
    if(!validatdor.valid){
      const errs = validatdor.errors.map(e => e.stack);
      throw new ExpressError(errs, 400)
    }
    
    const user = await User.register({...req.body});
    const token = createTokenForUser(user.username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post('/login', async function(req, res, next) {
  try {
    const validatdor = jsonschema.validate(req.body, userAuthSchema);
    if(!validatdor.valid) {
      const errs = validatdor.errors.map(e => e.stack);
      throw new ExpressError (errs, 400)
    }

    const { username, password } = req.body;
    const user = await User.authenticate(username, password);
    const token = createTokenForUser(user);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
