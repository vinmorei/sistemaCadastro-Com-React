const Produto = require('../models/product.model');

module.exports = {
    async index(req,res){
        const product = await Produto.find();
        res.json(product);
    },
    async create(req,res){
        const {product_name, product_descrip, product_price, product_amount} = req.body;
        let data = {};
        let product =  await Produto.findOne({product_name});
        
        if(!product){
            data = {product_name, product_descrip, product_price, product_amount};

            product = await Produto.create(data);
            return res.status(200).json(product);
        }else{
            return res.status(500).json(product);
        }
    },
    async details(req,res){
        const {_id} = req.params;
        const product = await Produto.findOne({_id});
        res.json(product);
    },
    async delete(req,res){
        const { _id } = req.params;
        const product = await Produto.findByIdAndDelete({_id});
        return res.json(product);
    },
    async update(req,res){
        const { _id, product_name, product_descrip, product_price, product_amount } = req.body;
        const data = {product_name, product_descrip, product_price, product_amount};
        const product = await Produto.findOneAndUpdate({_id},data,{new:true});
        res.json(product);
    }
}