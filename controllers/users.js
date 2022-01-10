const User = require('../models/user');

module.exports = {
  index,
};



function index(req, res, next) {
  console.log(req.query)
  console.log(req.user, ' req.user')
//   Make the query object to use with Student.find based up
//   the user has submitted the search form or now
  let modelQuery = req.query.workout ? {workout: new RegExp(req.query.workout, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'workout';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('users/index', {
      users,
      user: req.user,
      sortKey,
    });
  });
}