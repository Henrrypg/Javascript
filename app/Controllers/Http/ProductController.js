'use strict'

const AuthorizationService = require("../../Services/AuthorizationService")

const Database = use('Database')
const Product = use('App/Models/Product')

class ProductController {
    //list all products
    async index(){
        //using database directly
        const data = await Database.table('products')
        return data
    }
    //create a new product
    async create({auth, request}){
        console
        const user = await auth.getUser();
        const {name, description, price, quantity} = request.all();
        const product = new Product();
        product.fill({
            name,
            description,
            price,
            quantity
        });
        await product.save();
        return product;
    }
//delete a product
    async destroy({auth, request, params}){
        const id  = params.id;
        const product = await Product.find(id);
        AuthorizationService.verifyPermission(product);
        await product.delete();
        return product;
    }
}

module.exports = ProductController
