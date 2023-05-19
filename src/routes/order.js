
const express = require('express')
const routes = express.Router();

const { getAllOrder, getOrderById, postOrder, updateOrder, deleteOrder } 
= require('../controllers/order.controller')


routes.get('/api-order/', getAllOrder )


routes.post('/api-order/', postOrder );


// select one by id
 routes.get('/api-order/:id', getOrderById )


// update

routes.put('/api-order/:id', updateOrder )


routes.delete('/api-order/:id', deleteOrder )
  

module.exports = routes;