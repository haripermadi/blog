<template>
  <div class="container">
    <div class="row">
      <ul class="list-group col-md-4">
        <h4>Latest Post</h4>
        <sidebar :articles="articles">
        </sidebar>
      </ul>
        <router-view :articles="articles"></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'ListContent',
  // props: ['articles'],
  data () {
    return {
      articles: [],
      token: localStorage.getItem('token'),
      userId: localStorage.getItem('userId')
    }
  },
  components: {
    Sidebar
  },
  created: function () {
    this.showArticle()
  },
  methods: {
    showArticle: function () {
      let self = this
      console.log('ini id user onload', this.userId)
      axios({
        method: 'get',
        url: `http://api-blog.haripermadi.com/article`,
        headers: {
          token: this.token
        }
      }).then(function (response) {
        console.log('respon get article', (response.data.listArticle))
        self.articles = response.data.listArticle
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<style>
h4 {
  font-size: 16px;
  color: navy;
}
</style>
