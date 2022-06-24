const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    product_name:String,
    product_descrip:String,
    product_price:Number,
    product_amount:{type:Number,default:0}
},{
    timestamps:true
});

const produtos = mongoose.model('Produtos',dataSchema);
module.exports = produtos;