'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.group(() => {

//User routes
  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');


// Product CRUD routes
  Route.get('products', 'ProductController.index').middleware('auth');
  Route.post('products', 'ProductController.create').middleware('auth');
  Route.delete('products/:id', 'ProductController.destroy').middleware('auth');
  Route.patch('products/:id', 'ProductController.update').middleware('auth');

//filter
  Route.get('search/:query', 'ProductController.filter')
}).prefix('api');

