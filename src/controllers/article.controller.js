

const ArticleSchema = require('../models/articles')


const getallArticle = async (req,res) => {
    try {
        const data = await ArticleSchema.find()
         res.status(200).json({ok:true,articles:data})
      } catch (error) {
          res.status(500).json({ok:false,articles:error})
      }
}



const postArticle = async (req,res)=> {
  
     console.log( req.body );

  
    try {
     const article = await ArticleSchema(req.body)
     console.log(article);
     const data = await article.save()
      res.status(200).json({ok:true,articles:data})
    } catch (error) {
        console.log(error);
         res.status(500).json({ok:false,articles:error})
    }  
}


const  getArticleById = async (req,res) => {
    const { id } = req.params
    try {
     const idData = await ArticleSchema.findById(id)
     res.status(200).json(idData)
    } catch (error) {
        res.status(500).json({ok:false,articles:error})
    }
}


const updateArticle = async (req,res) => {
    const idArticle = req.params.id
    const newArticle = {...req.body}

    try {
      const updateArticle = await ArticleSchema.findByIdAndUpdate(idArticle,newArticle,{new:true})

      res.status(200).json({ok:true,articles:updateArticle})

    } catch (error) {   
        res.status(500).json({ok:false,articles:error})
    }
   
}


const deleteArticle = async (req,res) => {
    const idCrud = req.params.id

    await ArticleSchema.findByIdAndDelete(idCrud)
    res.status(200).json({ok:true, articles:"article deleted"})
 
     try {
         
     } catch (error) {
         res.status(500).json({ok:false,articles:error})
     }
 
}

module.exports = {
    getallArticle,
    postArticle,
    getArticleById,
    updateArticle,
    deleteArticle
}