<template>
  <div class="container col-md-8">
    <div class="container">
      <div>
        <h2>{{contentBlog.title}}</h2>
      </div>
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <footer class="blockquote-footer"> Published by: {{contentBlog.author}} | <cite title="Source Title">{{contentBlog.createdAt}}</cite></footer>
      </blockquote>
    </div>
    <div class="container">
      <p>{{contentBlog.content}}</p>
    </div>
    <hr>
    <div>
      <button type="button" class="btn btn-danger btn-sm" @click="deleteArticle(contentBlog)" v-if="token !=null">Remove</button>
      <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#editArticleModal" v-if="token !=null">Edit Article</button>
    </div>
     <!-- Modal add article-->
    <div class="modal fade" id="editArticleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Edit Article</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="name" class="col-form-label">Title:</label>
                <input type="text" class="form-control" v-model="contentBlog.title">
              </div>
              <div class="form-group">
                <label for="email" class="col-form-label">Author:</label>
                <input type="text" class="form-control" v-model="contentBlog.author">
              </div>
              <div class="form-group">
                <label for="password" class="col-form-label">Content:</label>
                <textarea  class="form-control" v-model="contentBlog.content"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="editArticle(contentBlog)" data-dismiss="modal">Publish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BlogContent',
  props: ['id', 'articles'],
  data () {
    return {
      contentBlog: '',
      token: localStorage.getItem('token'),
      userId: localStorage.getItem('userId')
    }
  },
  watch: {
    id () {
      this.articles.map(value => {
        if (value._id === this.id) {
          this.contentBlog = value
        }
      })
    }
  },
  methods: {
    deleteArticle: function (article) {
      // let self = this
      console.log('removed', article)
      axios({
        method: 'delete',
        url: `http://localhost:3000/article/${article._id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(function (response) {
        console.log('respon gettodo', JSON.stringify(response))
        location.reload()
      }).catch(function (err) {
        console.log(err)
      })
    },
    editArticle: function (data) {
      console.log('ediiit', data)
      axios({
        method: 'put',
        url: `http://localhost:3000/article/${data._id}`,
        data: data
      }).then(function (response) {
        console.log(response)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
