const User = require('../models/user');

module.exports = {
  index,
};



async function index(req, res, next) {
  
  try {
      let modelQuery = await req.query.workout ? {workout: new RegExp(req.query.workout, 'i')} : {};

        let sortKey = await req.query.sort || 'workout';
        User.find(modelQuery)
        .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    
        res.render('users/index', {
        users,
        user: req.user,
        sortKey
    });
});
    
    } catch(err) {

    }
}