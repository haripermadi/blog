const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var articleSchema = new Schema({
  title:  String,
  author: String,
  content: String,
},
{timestamps : true}
);

var Article = mongoose.model('Article', articleSchema);

module.exports = Article