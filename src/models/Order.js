const { Schema, model } = require('mongoose')

// nuestros squema
const OrderSchema = Schema({
   
   order: [],
   description:{ }
})

 

module.exports = model('Order', OrderSchema )