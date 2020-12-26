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
    async create({auth, request}){
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
    async destroy({auth, request, params}){
        const user = await auth.getUser();
        const id  = params.id;
        const product = await Product.find(id);
        AuthorizationService.verifyPermission(product);
        await product.delete();
        return product;
    }

    async update({auth, request, params}){
        const user = await auth.getUser();
        const id  = params.id;
        const product = await Product.find(id);
        AuthorizationService.verifyPermission(product);
        product.merge(request.only('name'));
        await product.save();
        return product;
    }

    async filter({request, params}) {
        
        let query = params.query;
        let products = await Product.query().where('name', 'like', '%' + query + '%')
          .orWhere('description', 'like', '%' + query + '%').fetch();
          console.log(products);
        return products
    }
}

module.exports = ProductController
