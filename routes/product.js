var mongoose = require("mongoose");
var productRegister = mongoose.model('product_reg');
var productRouter = {};

productRouter.index = (req, res) => {
    res.render('product_index');
};

//************************Product CRUD operations***********************************************************************
//===============================Product Create===============================================
productRouter.create = (req, res) => {
    
    var newProduct = {
        productname: req.body.pname,
        description: req.body.pdescription,
        mrp: req.body.pmrp,
        sp: req.body.psp,
        mxdiscount: req.body.pmxdiscount,
    };
    
    productRegister.create(newProduct, (err, product) =>{
        if (err) {
            res.render('error', {error: 'Error adding product'});
        }
        
        res.redirect('/products');
    });
    res.redirect('/products');
};//===================/////////

//=======================================Product Update========================================
productRouter.update = (req, res) => {
    
};//===================///////


//=======================================Product Delete========================================
productRouter.delete = (req, res) => {
    
    var productId = req.body.pid;
    productRegister.findOneAndRemove({ _id: productId}, (err, product) => {
        if (err) {
            res.render('error', { error: 'Error product deletion'});
        }
    });
    
    res.redirect('/products');  
};//==================//////////

//***********************************************************************************///////////////////////////////////

module.exports = productRouter;