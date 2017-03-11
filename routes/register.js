var mongoose = require('mongoose');
var userRegister = mongoose.model('user_reg');
var registerRouter = {};

registerRouter.index = (req, res) => {
    res.render('register');
};

registerRouter.create = (req, res) => {
    
    var newUser = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.userrole,
        username: req.body.username,
        password: req.body.password
    }; 
    
    userRegister.create(newUser, (err, user) => {
        if (err) {
            res.render('error', {error: 'Error creating user'});
        }
        res.redirect('/users');
    });
};

registerRouter.delete = (req, res) => {
    // console.log(req.body);
    var userid = req.body.id;
     console.log(userid);
    userRegister.findOneAndRemove({ _id: userid}, (err, user) => {
        if (err) {
            res.render('error', { error: 'Error deleting user.' });
            return;
        }
        
        console.log('user removed with _id: ' + user);
        res.redirect('/users');
    });
};

module.exports = registerRouter;