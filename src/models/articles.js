const { Schema, model } = require('mongoose')

const ArticlesSchema = Schema({
    name:{type:String },
    descripcion: {type:String   },
    price: { type: Number },
    tax: { type: Number },
    NotTax: { type: Number },
});



module.exports = model('Article', ArticlesSchema )