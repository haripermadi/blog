const express = require('express');
const router = express.Router();

const {showArticle,addArticle,removeArticle,updateArticle} = require('../controllers/article.controller')


router.get('/',showArticle)
router.post('/',addArticle)
router.delete('/:id',removeArticle)
router.put('/:id',updateArticle)


module.exports = router