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
      articles: [
        {
          id: 1,
          title: 'How to make homemade slime',
          author: 'Mr.Crab',
          content: 'You are standing at the counter with a goopy mess in your hands, frantically searching google for how to fix this disaster. The kids are near tears having waited all week for this day. You need to come up with a fix like right now! And then you find it, the perfect answer is our homemade slime recipe, and why is that? Because our slime recipes really work, and we care about showing you how to make awesome slime!'
        },
        {
          id: 2,
          title: 'Fruits',
          author: 'Mr.Crab',
          content: 'You are standing at the counter with a goopy mess in your hands, frantically searching google for how to fix this disaster. The kids are near tears having waited all week for this day. You need to come up with a fix like right now! And then you find it, the perfect answer is our homemade slime recipe, and why is that? Because our slime recipes really work, and we care about showing you how to make awesome slime!'
        },
        {
          id: 3,
          title: 'Hamburger',
          author: 'Mr.Crab',
          content: 'You are standing at the counter with a goopy mess in your hands, frantically searching google for how to fix this disaster. The kids are near tears having waited all week for this day. You need to come up with a fix like right now! And then you find it, the perfect answer is our homemade slime recipe, and why is that? Because our slime recipes really work, and we care about showing you how to make awesome slime!'
        },
        {
          id: 4,
          title: 'Ice cream rolls',
          author: 'Mr.Crab',
          content: 'You are standing at the counter with a goopy mess in your hands, frantically searching google for how to fix this disaster. The kids are near tears having waited all week for this day. You need to come up with a fix like right now! And then you find it, the perfect answer is our homemade slime recipe, and why is that? Because our slime recipes really work, and we care about showing you how to make awesome slime!'
        }
      ],
      token: localStorage.getItem('token'),
      userId: localStorage.getItem('userId')
    }
  },
  components: {
    Sidebar
  },
  created: function () {
    // this.showArticle()
  },
  methods: {
    showArticle: function () {
      // let self = this
      console.log('ini id user onload', this.userId)
      axios({
        method: 'get',
        url: `http://localhost:3000/article`,
        headers: {
          token: this.token
        }
      }).then(function (response) {
        console.log('respon get article', (response.data.listArticle))
        // this.articles = response.data.listArticle
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
