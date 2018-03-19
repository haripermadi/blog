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
    Article.create({
      title:req.body.title,
      content:req.body.content
    },(err,newArticle)=>{
      if(err){
        res.status(404).json({
          message:'failed adding article'
        })
      }else{
        res.status(201).json({
          message:'success adding article',
          newArticle
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
    Article.findByIdAndUpdate(id,req.body,(err)=>{
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