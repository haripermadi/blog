const Article = require('../models/article')

module.exports = {
  showArticle: (req,res)=>{
    console.log('masuk')
    Article.find()
    .exec()
    .then(listArticle=>{
      console.log('masuk sini')
      res.status(200).json({
        message:'success show articles',
        listArticle
      })
    }).catch(err=>{
      res.status(400).json({
        message:'failed to show article'
      })
    })
  },
  addArticle:(req,res)=>{
    console.log('masuk add article')
    let input = {
      title:req.body.title,
      author: req.body.author,
      content:req.body.content
    }
    let article = new Article(input)
    article.save().then(newArticle=>{
      if(newArticle){
        res.status(201).json({
          message:'success adding article',
          newArticle
        })
      }else{
        res.status(404).json({
          message:'failed adding article'
        })
      }
    })
  },
  removeArticle: (req,res)=>{
    let id = {
      _id:req.params.id
    }
    Article.findByIdAndRemove(id,(err,data)=>{
      if(err){
        res.status(400).json({
          message:'failed remove article'
        })
      }else{
        res.status(200).json({
          message:'success remove an article'
        })
      }
    })
  },
  updateArticle:(req,res)=>{
    let id = {_id:req.params.id}
    let input = {
      title:req.body.title,
      author: req.body.author,
      content:req.body.content
    }
    Article.findByIdAndUpdate(id,input,(err)=>{
      if(err){
        res.status(400).json({
          message:"error",
          err
        })
        
      }else{
        res.status(200).json({
          message:"update success",
        })
      }
    })
  },
}