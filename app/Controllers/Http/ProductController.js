'use strict'
const Database = use('Database')
const Product = use('App/Models/Product')

class ProductController {
    async index(){
        const data = await Database.table('products')
        return data
        //return await product.products().fetch();
    }
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
        console.log(product);
        await product.save();
    }
}

module.exports = ProductController
