<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light" >
    <a class="navbar-brand" href="#">LifeLog</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto" id="mainnav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" v-if="userId == null"><a class="nav-link" href="" data-toggle="modal" data-target="#signInModal">Sign In</a></li>
        <li class="nav-item" v-if="userId == null"><a class="nav-link" href="" data-toggle="modal" data-target="#signUpModal">Sign Up</a></li>
        <li class="nav-item" v-if="userId != null">
          <a class="nav-link" href="" @click="logOutButtonClick" >Sign Out</a>
        </li>
        <li class="nav-item" v-if="userId != null"><a class="nav-link" href="" data-toggle="modal" data-target="#addArticleModal">Add Article</a></li>
      </ul>
    </div>
  </nav>
  <!-- Modal sign in-->
  <div class="modal fade" id="signInModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Sign In</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="email" class="col-form-label">Email:</label>
              <input type="email" class="form-control" v-model="userLogin.email">
            </div>
            <div class="form-group">
              <label for="password" class="col-form-label">Password:</label>
              <input type="password" class="form-control" v-model="userLogin.password">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="loginUser">Sign In</button>
        </div>
      </div>
    </div>
  </div>
    <!-- Modal sign uo-->
  <div class="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Sign Up</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="name" class="col-form-label">Name:</label>
              <input type="text" class="form-control" v-model="objUser.name">
            </div>
            <div class="form-group">
              <label for="email" class="col-form-label">Email:</label>
              <input type="email" class="form-control" v-model="objUser.email">
            </div>
            <div class="form-group">
              <label for="password" class="col-form-label">Password:</label>
              <input type="password" class="form-control" v-model="objUser.password">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="createUser">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal add article-->
  <div class="modal fade" id="addArticleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Add new article</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="name" class="col-form-label">Title:</label>
              <input type="text" class="form-control" v-model="newArticle.title">
            </div>
            <div class="form-group">
              <label for="email" class="col-form-label">Author:</label>
              <input type="text" class="form-control" v-model="newArticle.author">
            </div>
            <div class="form-group">
              <label for="password" class="col-form-label">Content:</label>
              <textarea  class="form-control" v-model="newArticle.content"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="createArticle" data-dismiss="modal">Publish</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Navbar',
  data () {
    return {
      userLogin: {
        email: '',
        password: ''
      },
      token: localStorage.getItem('token'),
      userId: localStorage.getItem('userId'),
      objUser: {
        name: '',
        email: '',
        password: ''
      },
      newArticle: {
        title: '',
        author: '',
        content: ''
      }
    }
  },
  methods: {
    createUser: function () {
      console.log('ini form input===', this.objUser)
      // alert(this.objUser)
      axios({
        method: 'post',
        url: 'http://localhost:3000/login/signup',
        data: this.objUser
      }).then(function (resSignUp) {
        console.log('resLogin', JSON.stringify(resSignUp))
        location.reload()
      }).catch(function (error) {
        console.log(error)
      })
    },
    loginUser: function () {
      console.log('login user===', this.userLogin)
      axios({
        method: 'post',
        url: 'http://localhost:3000/login/signin',
        data: this.userLogin
      }).then(function (resSignIn) {
        console.log('resLogin', resSignIn.data)
        localStorage.setItem('token', resSignIn.data.data.token)
        localStorage.setItem('userId', resSignIn.data.data.id)
        location.reload()
      }).catch(function (error) {
        alert('wrong email/password')
        console.log(error)
      })
    },
    logOutButtonClick: function () {
      console.log('user log out')
      localStorage.clear()
    },
    createArticle: function () {
      console.log('add article')
      axios({
        method: 'post',
        url: 'http://localhost:3000/article',
        data: this.newArticle
      }).then(response => {
        console.log('respon add', response)
        location.reload()
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
.navbar {
  background-image: linear-gradient(139deg, #00C4CC 0%, #7D2AE8 100%)
}

</style>
