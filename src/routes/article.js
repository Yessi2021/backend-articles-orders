const express = require('express')
const routes = express.Router();


const { getallArticle, postArticle, getArticleById, updateArticle, deleteArticle } 
= require('../controllers/article.controller')

routes.get('/', getallArticle )


routes.post('/', postArticle );


// select one by id
routes.get('/:id', getArticleById )


// update

routes.put('/:id', updateArticle )


routes.delete('/:id', deleteArticle )


module.exports = routes;