'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('description', 300)
      table.integer('price').notNullable()
      table.integer('quantity').notNullable()
      table.timestamps()
    })
  }


  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
