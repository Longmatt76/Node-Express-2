/** Middleware for handling req authorization for routes. */

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');
const ExpressError = require('../helpers/expressError');

/** Authorization Middleware: Requires user is logged in. */

function requireLogin(req, res, next) {
  try {
    if (req.curr_username) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Authorization Middleware: Requires user is logged in and is staff. */

function requireAdmin(req, res, next) {
  try {
    if (req.curr_admin) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Authentication Middleware: put user on request
 *
 * If there is a token, verify it, get payload (username/admin),
 * and store the username/admin on the request, so other middleware/routes
 * can use it.
 *
 * It's fine if there's no token---if not, don't set anything on the
 * request.
 *
 * If the token is invalid, an error will be raised.
 *
 **/

function authUser(req, res, next) {
  try {
    const token = req.body._token || req.query._token;
    if (token) {
      jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
          err.status = 401;
          return next(err);
        }
        req.curr_username = decoded.username;
        req.curr_admin = decoded.admin;
        return next();
      });
    } else {
      return next();
    }
  } catch (err) {
    err.status = 401;
    return next(err);
  }
} // end

// requires that person making request is either the curr_user or an admin
function requireUserOrAdmin(req, res, next) {
  try {
    const curr_username = req.curr_username;
    const curr_admin = req.curr_admin;
    
    if (!(curr_admin || curr_username === req.params.username)) {
      throw new ExpressError("Unauthorized", 401);
    }
    
    return next();
  } catch (err) {
    return next(err);
  }
}


module.exports = {
  requireLogin,
  requireAdmin,
  authUser,
  requireUserOrAdmin
};
