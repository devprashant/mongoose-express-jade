var mongoose = require('mongoose');
var userRegister = mongoose.model('user_reg');

var usersRouter = {};

usersRouter.all = (req, res) => {
    userRegister.find({},null,{ sort: {'_id': '-1'}}, (err, users) => {
       if (err) throw err;
       
      res.render('user_list', {users: users});
    });
}

module.exports = usersRouter;