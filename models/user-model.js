var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/cstay_user", ()=> console.log('db connected!!!'));

var userSchema = new Schema({
    
    name: String,
    email: String,
    username: String,
    password: String,
    role: String,
    created_at: { type: Date, default: Date.now }
});

mongoose.model('user_reg', userSchema);