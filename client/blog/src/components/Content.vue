<template>
  <div class="row">
    <div class="col-md-8 col-sm-12">
      <p>Blog content will be here</p>
    </div>
    <div class="container" v-for="(article,i) in articles" :key="i">
      <div class="col-md-4 col-sm-12">
        <div class="list-group">
          <a href="#" class="list-group-item">
            <h4 class="list-group-item-heading">{{article.title}}</h4>
            <p class="list-group-item-text">{{limitDesc(article.content)}}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contents',
  data () {
    return {
      articles: [
        {
          title: 'How to make homemade slime',
          author: 'Mr.Crab',
          content: 'You are standing at the counter with a goopy mess in your hands, frantically searching google for how to fix this disaster. The kids are near tears having waited all week for this day. You need to come up with a fix like right now! And then you find it, the perfect answer is our homemade slime recipe, and why is that? Because our slime recipes really work, and we care about showing you how to make awesome slime!'
        },
        {
          title: 'How to make notebook',
          author: 'Mr.Crab',
          content: 'You are standing at the counter with a goopy mess in your hands, frantically searching google for how to fix this disaster. The kids are near tears having waited all week for this day. You need to come up with a fix like right now! And then you find it, the perfect answer is our homemade slime recipe, and why is that? Because our slime recipes really work, and we care about showing you how to make awesome slime!'
        },
        {
          title: 'How to draw level I',
          author: 'Mr.Crab',
          content: 'You are standing at the counter with a goopy mess in your hands, frantically searching google for how to fix this disaster. The kids are near tears having waited all week for this day. You need to come up with a fix like right now! And then you find it, the perfect answer is our homemade slime recipe, and why is that? Because our slime recipes really work, and we care about showing you how to make awesome slime!'
        },
        {
          title: 'How to draw level II',
          author: 'Mr.Crab',
          content: 'You are standing at the counter with a goopy mess in your hands, frantically searching google for how to fix this disaster. The kids are near tears having waited all week for this day. You need to come up with a fix like right now! And then you find it, the perfect answer is our homemade slime recipe, and why is that? Because our slime recipes really work, and we care about showing you how to make awesome slime!'
        }
      ]
    }
  },
  methods: {
    limitDesc: function (text) {
      // console.log("length",text.length)
      if (text.length > 100) {
        text = text.substr(0, 100) + '...'
      }
      return text
    }
  }
}
</script>

<style>
.col-md-4{
  float: right;
}

</style>
