var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/cstay_products", ()=> console.log('db connected!!!'));

var productSchema = new Schema({
    
    productname: String,
    description: String,
    mrp: String,
    sp: String,
    mxdiscount: String,
    created_at: { type: Date, default: Date.now }
});

mongoose.model('product_reg', productSchema);